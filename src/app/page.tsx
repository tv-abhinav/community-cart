"use client"
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import FeaturedProduct from '@/components/FeaturedProduct'
import TopShops from '@/components/TopShops'
import { get_all_categories } from '@/Services/Admin/category'
import { get_all_products } from '@/Services/Admin/product'
import useSWR from 'swr'
import { toast, ToastContainer } from 'react-toastify'
import { setCategoriesForCustomer } from '@/utils/resolvers/CustomerDataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Loading from './loading'
import { setUserData } from '@/utils/resolvers/UserDataSlice'
import { RootState } from '@/Store/store'
import { setProductData } from '@/utils/resolvers/SellerSlice'


export default function Home() {
  const dispatch = useDispatch();
  const categoryLoading = useSelector((state: RootState) => state.Seller.catLoading)
  const productLoading = useSelector((state: RootState) => state.Seller.productLoading)
  const [loading, setLoading] = useState(true)
  const [ratio, setRatio] = useState(16/9) 

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) return;
    dispatch(setUserData(JSON.parse(userData)));
  }, [])


  useEffect(() => {
    FetchDataOFProductAndCategory()
  }, [])


  const FetchDataOFProductAndCategory = async () => {

    const categoryRes = await get_all_categories();
    if (categoryRes?.status !== 200) toast.error(categoryRes?.statusText)
    dispatch(setCategoriesForCustomer(categoryRes?.data))



    const productRes = await get_all_products();
    if (productRes?.status !== 200) toast.error(productRes?.statusText)
    dispatch(setProductData(productRes?.data))


    setLoading(false)
  }

  return (
    <>
      <Navbar />
      <Hero setRatio={setRatio} />
      {
        loading ? <Loading /> :
          <>

            <TopShops />
            <FeaturedProduct  />
            <Footer />

          </>
      }
      <ToastContainer />
    </>
  )
}
