"use client"

import React, { useEffect, useState, FormEvent } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Link from 'next/link';
import { login_me } from '@/Services/auth';
import Cookies from 'js-cookie';
import { useDispatch } from 'react-redux';
import jwt_decode from "jwt-decode";
import { setUserData } from '@/utils/resolvers/UserDataSlice';
// import { setCategoryData } from '@/utils/resolvers/SellerSlice';
import { useRouter } from 'next/navigation';
import { TailSpin } from 'react-loader-spinner';
import { GrClose } from 'react-icons/gr';
import { UserSessionSchema } from '@/model/User';

export default function Login() {
    const dispatch = useDispatch()
    const Router = useRouter()

    const [formData, setFormData] = useState({ email: "", password: "" });
    const [error, setError] = useState({ email: "", password: "" });
    const [loading, setLoding] = useState<boolean>(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        setLoding(true);
        if (!formData.email) {
            setError({ ...error, email: "Email Field is Required" })
            return;
        }
        if (!formData.password) {
            setError({ ...error, password: "Password Field is required" })
            return;
        }

        const res = await login_me(formData);
        let data = res.data;
        if (res.status == 200 && data) {
            setLoding(false);
            Cookies.set('token', data);
            const tokenData:UserSessionSchema = jwt_decode(data);
            localStorage.setItem('user', JSON.stringify(tokenData));
            dispatch(setUserData(tokenData));
            // const userData = localStorage.getItem('user');
            // const userDataString = typeof userData === 'string' ? userData : '';
            if (tokenData?.role === 'SELLER') {
                Router.push('/Dashboard')
            }
            else {
                Router.push('/')
            }
        }
        else {
            setLoding(false);
            toast.error(res.statusText);
        }
    }


    useEffect(() => {
        if (Cookies.get('token')) {
            Router.push('/');
        }
    }, [Router])


    return (
        <>
            {/* <Navbar /> */}
            <div className='relative w-full h-screen bg-gray-50 text-black'>
                <Link href={'/'}><GrClose className="absolute top-5 right-5 w-10 h-10 stroke-current" /></Link>
                <div className="flex flex-col items-center  text-center justify-center px-6 py-8 mx-auto h-screen lg:py-0">
                    <div className="w-full bg-white text-black rounded-lg shadow  md:mt-0 sm:max-w-md xl:p-0 ">
                        <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
                                Sign in to your account
                            </h1>
                            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6" action="#">
                                <div className='text-left'>
                                    <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 ">Your email</label>
                                    <input onChange={(e) => setFormData({ ...formData, email: e.target.value })} type="email" name="email" id="email" className="bg-gray-50  border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5 " placeholder="name@company.com" />
                                    {
                                        error.email && <p className="text-sm text-red-500">{error.email}</p>
                                    }
                                </div>
                                <div className='text-left'>
                                    <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 ">Password</label>
                                    <input onChange={(e) => setFormData({ ...formData, password: e.target.value })} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-orange-600 focus:border-orange-600 block w-full p-2.5" />
                                    {
                                        error.password && <p className="text-sm text-red-500">{error.password}</p>
                                    }
                                </div>
                                <div className="flex items-center justify-between">
                                    <div className="flex items-start">
                                        <div className="flex items-center h-5">
                                            <input id="remember" aria-describedby="remember" type="checkbox" defaultChecked className="w-4 h-4 bg-white  border border-gray-300 rounded focus:ring-3 focus:ring-orange-300  " />
                                        </div>
                                        <div className="ml-3 text-sm">
                                            <label htmlFor="remember" className="text-gray-500  ">Remember me</label>
                                        </div>
                                    </div>
                                    <Link href="/auth/reset" className="text-sm font-medium text-orange-600 hover:underline ">Forgot password?</Link>
                                </div>
                                {
                                    loading ? <button type="button" className="w-full flex items-center justify-center text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">
                                        <TailSpin
                                            height="20"
                                            width="20"
                                            color="white"
                                            ariaLabel="tail-spin-loading"
                                            radius="1"
                                            wrapperStyle={{}}
                                            wrapperClass=""
                                            visible={true}
                                        />
                                        </button> : <button type="submit" className="w-full text-white bg-orange-600 da hover:bg-orange-700 focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-orange-600 dark:hover:bg-orange-700 dark:focus:ring-orange-800">Sign in</button>
                                }
                                
                                <p className="text-sm text-black ">
                                    Don't have an account yet? <Link href={"/auth/register"} className="font-medium text-orange-600 hover:underline ">Sign up</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </div>
        </>
    )
}
