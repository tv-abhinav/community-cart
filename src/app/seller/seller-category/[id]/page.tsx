"use client"


import { get_seller_by_id } from '@/Services/Admin/seller'
import Loading from '@/app/loading'
import CategoryCard from '@/components/CategoryCard'
import { CategorySchema } from '@/model/Category'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { toast, ToastContainer } from 'react-toastify'
import useSWR from 'swr'

interface pageParam {
    id: string
}

export default function Page({ params, searchParams }: { params: pageParam, searchParams: any }) {
    const [sellerCategories, setSellerCategoriesData] = useState<CategorySchema[] | []>([]);
    const { res, isLoading } = useSWR('/gettingProductOFSpecificCategoryID', () => get_seller_by_id(params.id))
    if (res?.status !== 200) toast.error(res?.statusText)

    useEffect(() => {
        if (res)
            setSellerCategoriesData(res.data.categories)
    }, [res])

    const CategoryName = sellerCategories?.map((item) => {
        return item?.categoryName
    })

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
                        {CategoryName?.[0] || "Loading Category"}
                    </li>
                </ul>
            </div>
            <div className='w-full h-5/6  flex items-start justify-center flex-wrap overflow-auto'>
                {
                    isLoading ? <Loading /> : <>
                        {
                            sellerCategories?.map((item: CategorySchema) => {
                                return <CategoryCard
                                    categoryName={item?.categoryName}
                                    categoryDescription={item?.categoryDescription}
                                    categoryImage={item?.categoryImage}
                                    categorySlug={item?.categorySlug}
                                    _id={item?._id}
                                    key={item?._id} />
                            })
                        }
                    </>
                }
                {
                    isLoading === false && sellerCategories === undefined || sellerCategories?.length < 1 && <p className='text-2xl my-4 text-center font-semibold text-red-400'>No Categories Found in this Seller</p>
                }
            </div>
            <ToastContainer />
        </div>
    )
}
