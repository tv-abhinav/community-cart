"use client"
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import AdminNavbar from '@/components/AdminNavbar';
import AdminSidebar from '@/components/AdminSidebar';
import SuperComponent from '@/components/SuperComponent';
import { ToastContainer } from 'react-toastify';
import { useDispatch } from 'react-redux';
import Loading from '../loading';
import { setNavActive } from '@/utils/resolvers/AdminNavSlice';
import GetData from '@/components/GetData';

export default function Dashboard() {
  const Router = useRouter();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isHasToFetch, setIsHasToFetch] = useState<boolean>(true)

  useEffect(() => {
    let usr = JSON.parse(localStorage.getItem('user') || '{}')
    if (!Cookies.get('token') || usr?.role !== 'SELLER') {
      Router.push('/')
    }
    dispatch(setNavActive('Base'))
  }, [dispatch, Cookies, Router])

  return (
    <div className='w-full h-screen flex  bg-gray-50 overflow-hidden'>
      <GetData hasToFetch={isHasToFetch} onLoad={(isLoad: boolean) => {
        setIsLoading(isLoad);
        if(!isLoad) setIsHasToFetch(false);
        }} />
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



