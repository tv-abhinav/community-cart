"use client"


import { delete_a_cart_item, get_all_cart_Items } from '@/Services/common/cart'
import { RootState } from '@/Store/store'
import { CartViewSchema } from '@/model/Cart'
import { setCart } from '@/utils/resolvers/CartSlice'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'
import { AiFillDelete } from 'react-icons/ai'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { useSWRConfig } from 'swr'

interface userData {
    email: string,
    role: string,
    _id: string,
    name: string
}


export default function CartCard({ product, userID, _id , quantity }: CartViewSchema) {
    const dispatch = useDispatch();
    const [qnt, setQnt] = useState(quantity)
    const Router = useRouter();
    const user = useSelector((state: RootState) => state.User.userData) as userData | null
    const cart = useSelector((state: RootState) => state.Cart.cart) as CartViewSchema[] | null

    const handleDeleteCartItem = async () => {
        const res = await delete_a_cart_item(_id)
        if (res?.status === 200) {
            fetchCartData();
            return toast.success(res?.message)
        }
        return toast.error(res?.statusText)
    }


    const fetchCartData = async () => {
        if (!user?._id) return Router.push('/')
        const cartData = await get_all_cart_Items(user?._id)
        if (cartData?.status === 200) {
            dispatch(setCart(cartData?.data))
        } else {
            toast.error(cartData?.statusText)
        }
    }



    const handleIncrement = () => {
        const newCart = cart?.map((item: CartViewSchema) => {
            if (item?._id === _id) {
                if (item?.product?.productQuantity > item?.quantity) {
                    return {
                        ...item,
                        quantity: Number(item?.quantity) + 1,
                    }
                }else{
                    toast.error('Product Quantity is not available')
                    return {
                        ...item,
                        quantity: Number(item?.product?.productQuantity),
                    }
                }
            }
            return item
        })
        if (qnt > 0) {
            let quantity = qnt + 1
            setQnt(quantity)
            if(newCart) dispatch(setCart(newCart))
        }
        else {
            setQnt(quantity)
            if(newCart) dispatch(setCart(newCart))
        }
    }


    const handleDecrement = () => {
        const newCart = cart?.map((item: CartViewSchema) => {
            if (item._id === _id) {
                if (item?.quantity > 1) {
                    return {
                        ...item,
                        quantity: Number(item.quantity) - 1,
                    }
                }
            }
            return item
        })
        if (qnt > 1) {
            let quantity = qnt - 1
            setQnt(quantity)
            if(newCart) dispatch(setCart(newCart))
        }
        else {
            setQnt(quantity)
            if(newCart) dispatch(setCart(newCart))
        }
    }


    return (
        <div className='bg-white w-10/12  rounded-xl m-2 border-b flex-col md:flex-row h-72  md:h-40 py-2 px-4 flex justify-around items-center'>
            <Image src={product?.productImage} alt='no image found' width={100} height={150} className='rounded' />
            <h3 className='font-semibold text-lg'>Rs {product?.productPrice}</h3>
            <div className='flex  justify-center items-center'>
                <button onClick={handleIncrement} className='btn btn-circle dark:text-white  text-xl'>+</button>
                <p className='mx-2 text-xl'>{quantity}</p>
                <button onClick={handleDecrement} className='btn btn-circle dark:text-white  text-xl'>-</button>
            </div>
            <AiFillDelete onClick={handleDeleteCartItem} className="text-red-500 text-2xl cursor-pointer " />
        </div>
    )
}
