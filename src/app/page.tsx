"use client"
import React, { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import FeaturedProduct from '@/components/FeaturedProduct'
import TopShops from '@/components/TopShops'
import { get_all_categories } from '@/Services/Admin/category'
import { get_all_products } from '@/Services/Admin/product'
import { toast, ToastContainer } from 'react-toastify'
import { setCategoriesForCustomer, setNearbySellers } from '@/utils/resolvers/CustomerDataSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import Loading from './loading'
import { setUserData } from '@/utils/resolvers/UserDataSlice'
import { RootState } from '@/Store/store'
import { setProductData } from '@/utils/resolvers/SellerSlice'
import { get_seller } from '@/Services/Admin/seller'
import { SellerSchema } from '@/model/Seller'
import { ProductSchema } from '@/model/Product'


export default function Home() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState<boolean>(false)
  const [loc, setLocation] = useState<{
    lat?: number
    lng?: number
  }>({})
  const [ratio, setRatio] = useState(16 / 9)
  const [topShops, setTopShops] = useState<SellerSchema[]>([])
  const [featuredProds, setFeaturedProds] = useState<ProductSchema[]>([])

  useEffect(() => {
    const userData = localStorage.getItem('user');
    if (!userData) return;
    dispatch(setUserData(JSON.parse(userData)));
  }, [])


  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(async (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude
        })
      },
        (error) => {
          if (error.code === 1) {
            toast.error("Please allow location to view nearby shops!")
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    FetchDataOFProductAndCategory()
  }, [])


  const FetchDataOFProductAndCategory = async () => {
    setLoading(true)
    const categoryRes = await get_all_categories();
    if (categoryRes?.status !== 200) toast.error(categoryRes?.statusText)
    dispatch(setCategoriesForCustomer(categoryRes?.data))

    const shopRes = await get_seller({
      sourceLatitude: loc.lat,
      sourceLongitude: loc.lng,
    });
    if (shopRes?.status !== 200) toast.error(shopRes?.statusText)
    if(shopRes?.data) setTopShops(shopRes.data.slice(0, 3))

    const productRes = await get_all_products();
    if (productRes?.status !== 200) toast.error(productRes?.statusText)
    console.log("productRes.data")
    console.log(productRes.data)
    if(productRes?.data) setFeaturedProds(productRes.data.slice(0, 9))
    setLoading(false)
  }

  return (
    <>
      <Navbar />
      <Hero setRatio={setRatio} />
      {
        loading ? <Loading /> :
          <>

            <TopShops topShops={topShops} />
            <FeaturedProduct products={featuredProds} />
            <Footer />

          </>
      }
      <ToastContainer />
    </>
  )
}
