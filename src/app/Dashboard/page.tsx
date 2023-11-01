"use client"
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import AdminNavbar from '@/components/AdminNavbar';
import AdminSidebar from '@/components/AdminSidebar';
import SuperComponent from '@/components/SuperComponent';
import { ToastContainer, toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import Loading from '../loading';
import { setNavActive } from '@/utils/resolvers/AdminNavSlice';
import { UserSessionSchema } from '@/model/User';
import GetData from '@/components/GetData';
import { RootState } from '@/Store/store';

export default function Dashboard() {
  const Router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(true)

  // useEffect(() => {
  //   (async () => {
  //     const sellerRes = await get_seller(user?.sub)
  //     setSeller(sellerRes.data);
  //     const catRes = await get_all_categories(user?.sub)
  //     setCategories(catRes.data);
  //   })()
  // }, [])

  useEffect(() => {
    let usr = JSON.parse(localStorage.getItem('user') || '{}')
    if (!Cookies.get('token') || usr?.role !== 'SELLER') {
      console.log("Hello!!")
      Router.push('/')
    }
    dispatch(setNavActive('Base'))
  }, [dispatch, Cookies, Router])

  return (
    <div className='w-full h-screen flex  bg-gray-50 overflow-hidden'>
      <GetData onLoad={() => setIsLoading(false)} />
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



