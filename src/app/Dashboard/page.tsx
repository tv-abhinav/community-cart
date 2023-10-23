"use client"
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import AdminNavbar from '@/components/AdminNavbar';
import AdminSidebar from '@/components/AdminSidebar';
import SuperComponent from '@/components/SuperComponent';
import { ToastContainer, toast } from 'react-toastify';
import useSWR from 'swr'
import { useDispatch } from 'react-redux';
import { setCatLoading, setCategoriesForSeller, setOrderData, setProdLoading, setProductData, setSellerData, setSellerLoading } from '@/utils/resolvers/SellerSlice';
import Loading from '../loading';
import { setNavActive } from '@/utils/resolvers/AdminNavSlice';
import { UserSessionSchema } from '@/model/User';
import { fetcher } from '@/utils/fetcher';
import { get_seller } from '@/Services/Admin/seller';
import { get_all_categories } from '@/Services/Admin/category';
import { fetchSellerData } from '@/utils/fetchDispatch';

export default function Dashboard() {
  const Router = useRouter();
  const dispatch = useDispatch();
  const [user, setUser] = useState<UserSessionSchema | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [seller, setSeller] = useState()
  const [categories, setCategories] = useState()

  // useEffect(() => {
  //   (async () => {
  //     const sellerRes = await get_seller(user?.sub)
  //     setSeller(sellerRes.data);
  //     const catRes = await get_all_categories(user?.sub)
  //     setCategories(catRes.data);
  //   })()
  // }, [])

  useEffect(() => {
    console.log("Inside useEffect");
    setIsLoading(true);
    if(user?.sub) {
      fetchSellerData(user.sub).then(res => {
        if (res.sellerRes.status === 200) dispatch(setSellerData(res.sellerRes.data))
        if (res.catRes.status === 200) dispatch(setCategoriesForSeller(res.catRes.data))
        if (res.prdRes.status === 200) dispatch(setProductData(res.prdRes.data))
        setIsLoading(false);
      }).catch(err => toast.error(err));
    }
  }, [user])


  useEffect(() => {
    let usr = JSON.parse(localStorage.getItem('user') || '{}')
    setUser(usr);
    if (!Cookies.get('token') || usr?.role !== 'SELLER') {
      console.log("Hello!!")
      Router.push('/')
    }
    dispatch(setNavActive('Base'))
  }, [dispatch, Cookies, Router])

  // const { data: sellerRes, isLoading: sellerLoading } = useSWR(`/getSeller/${user?.sub}`, fetcher)

  useEffect(() => {
    
    // dispatch(setSellerLoading(sellerLoading))
    // dispatch(setCatLoading(categoryLoading))

    // dispatch(setProductData(productData?.data))
    // dispatch(setProdLoading(productLoading))
    // dispatch(setOrderData(orderData?.data))
    // dispatch(setCatLoading(orderLoading))
  }, [seller, dispatch, categories]) //, productData, productLoading , orderData , orderLoading



  return (
    <div className='w-full h-screen flex  bg-gray-50 overflow-hidden'>
      <AdminSidebar />
      <div className='w-full h-full '>
        <AdminNavbar />
        <div className='w-full h-5/6  flex flex-wrap items-start justify-center overflow-y-auto  px-4 py-2'>
          {isLoading ? <Loading /> : <SuperComponent />}
          {/* || productLoading */}
        </div>
      </div>
      <ToastContainer />
    </div>
  )
}



