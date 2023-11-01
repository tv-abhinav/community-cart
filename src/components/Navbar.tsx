"use client"

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import Cookies from 'js-cookie';
import { RootState } from '@/Store/store';
import { useSelector } from 'react-redux';
import { FaCartArrowDown } from 'react-icons/fa';
import { CiDeliveryTruck } from 'react-icons/ci'
import { MdFavorite } from 'react-icons/md';
import { CategorySchema } from '@/model/Category';


export default function Navbar() {
    const router = useRouter()
    const [Scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const user = useSelector((state: RootState) => state.User.userData)
    const categories: CategorySchema[] = useSelector((state: RootState) => state.Customer.categories)

    useEffect(() => {
        window.onscroll = () => {
            setScrolled(window.pageYOffset < 30 ? false : true)
            return () => window.onscroll = null
        }
    }, [Scrolled])



    const handleLogout = () => {
        Cookies.remove('token');
        localStorage.clear();
        location.reload();
    }

    const toggleMenu = () => {
        setMenuOpen(!menuOpen)
    }

    return (

        <nav className="bg-white border-gray-200 dark:bg-gray-900 fixed top-0 left-0 z-50 w-full">
            <div className="flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="https://flowbite.com/" className="flex items-center">
                    <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3" alt="Flowbite Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Community Cart</span>
                </a>
                <button data-collapse-toggle="navbar-default" onClick={toggleMenu} type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                    </svg>
                </button>
                <div className={`md:navbar-end md:mt-0 md:flex space-y-3 md:space-y-0 md:items-center md:justify-center md:min-h-full w-full md:w-auto ${menuOpen ? 'block' : 'hidden md:block'}`} id="navbar-default">
                    <hr className='my-3 block md:hidden border-2 border-gray-200' />
                    <form className='w-full md:w-96'>
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Products, Categories..." required />
                            <button type="submit" className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
                        </div>
                    </form>
                    {
                        user ?
                            <div>
                                <button onClick={handleLogout} className='btn text-white mx-2'>logout</button>
                                <button onClick={() => router.push("/order/create-order")} className='btn btn-circle  mx-2'><FaCartArrowDown className='text-white text-xl' /></button>
                                <button onClick={() => router.push("/bookmark")} className='btn btn-circle  mx-2'><MdFavorite className='text-white text-xl' /></button>
                                <button onClick={() => router.push("/order/view-orders")} className='btn btn-circle  mx-2'><CiDeliveryTruck className='text-white text-xl' /></button>

                            </div>
                            :
                            <button onClick={() => router.push('/auth/login')} className='btn text-white mx-2'>Login</button>
                    }
                </div>
            </div>

            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                <li className="mr-2 w-36">
                    <Link href={`/`} aria-current="page" className="w-full inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">Home</Link>
                </li>
                {
                    categories.map((category, index) => {
                        return (
                            <li className="mr-2 w-36" key={index}>
                                <Link href={`/category/category-product/${category.categoryId}`} aria-current="page" className="w-full inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">{category.categoryName}</Link>
                            </li>
                        )
                    })
                }
                <li className="mr-2 w-36">
                    <Link href={`/`} aria-current="page" className="w-full inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">More..</Link>
                </li>
            </ul>

        </nav>
    )
}
