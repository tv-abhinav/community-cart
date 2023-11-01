"use client"


import { get_all_products } from '@/Services/Admin/product'
import Loading from '@/app/loading'
import ProductCard from '@/components/ProductCard'
import { ProductSchema } from '@/model/Product'
import { setCurrentCatId, setProductData } from '@/utils/resolvers/SellerSlice'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { toast, ToastContainer } from 'react-toastify'

interface pageParam {
    id: string
}

export default function Page({ params, searchParams }: { params: pageParam, searchParams: any }) {
    const dispatch = useDispatch()
    const [thisProduct, setThisProdData] = useState<ProductSchema[] | []>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        dispatch(setCurrentCatId(params.id))
        const getProdByCat = async () => {
            setIsLoading(true)
            const res = await get_all_products({ categoryId: Number(params.id) });
            if (res?.status !== 200) toast.error(res?.statusText)
            else {
                setThisProdData(res.data)
                dispatch(setProductData(res.data))
            }
            setIsLoading(false)
        }
        getProdByCat()
    }, [])

    return (
        <div className='w-full h-screen dark:text-black bg-gray-50 py-4 px-2 '>
            <div className="text-sm breadcrumbs  border-b-2 border-b-orange-600">
                <ul>
                    <li>
                        <Link href={'/'}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                            Home
                        </Link>
                    </li>
                    <li>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
                        {params.id || "Loading Category"}
                    </li>
                </ul>
            </div>
            <div className='w-full h-5/6  flex items-start justify-center flex-wrap overflow-auto'>
                {
                    isLoading ? <Loading /> : <>
                        {
                            thisProduct?.map((item: ProductSchema) => {
                                return <ProductCard item={item} key={item?.productId} />
                            })
                        }
                    </>
                }
                {
                    isLoading === false && thisProduct === undefined || thisProduct?.length < 1 && <p className='text-2xl my-4 text-center font-semibold text-red-400'>No Product Found in this Category</p>
                }
            </div>
            <ToastContainer />
        </div>
    )
}
