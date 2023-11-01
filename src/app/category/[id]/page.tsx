"use client"

import React from 'react'
import ProductCard from '@/components/ProductCard'
import {  useSelector } from 'react-redux'

import { RootState } from '@/Store/store'
import Loading from '@/app/loading'
import { ProductSchema } from '@/model/Product'

export default function FeaturedProduct() {
    

    const prodData = useSelector((state: RootState) => state.Seller.product);
    const prodLoading = useSelector((state: RootState) => state.Seller.productLoading);



    const FeaturedProducts = prodData?.filter((prod : ProductSchema) => {
        if(prod?.productFeatured){
            return prod
        }
    })


    const filteredProducts  =  FeaturedProducts?.slice(0, 9)
  
    return (
        <div className='w-full bg-gray-50 text-black  flex items-center flex-col justify-start'>
            <div className='flex items-center justify-center px-2 py-2 mb-2'>
                <h1 className='py-2 px-4 border-x-2 border-x-orange-500 font-semibold text-2xl '>Top Products</h1>
            </div>
            <div className='md:w-4/5 w-full px-1 h-full min-h-96 py-2 md:px-4 flex items-center justify-center flex-wrap'>
            {
                    prodLoading ? <Loading /> :
                        <>
                            {
                                filteredProducts?.length <  1 ? 
                                <h1 className='text-2xl font-semibold text-gray-500'>No Featured Products</h1> 
                                :
                                filteredProducts?.map((item: ProductSchema) => {
                                    return <ProductCard
                                        productName = {item?.productName}
                                        productPrice = {item?.productPrice}
                                        productFeatured = {item?.productFeatured}
                                        productImageUrl = {item?.productImageUrl}
                                        categoryId={item?.categoryId}
                                        productSlug = {item?.productSlug}
                                        productId={item?.productId}
                                        key={item?.productId} />
                                })
                            }
                        </>
                }

            </div>
        </div>
    )
}
