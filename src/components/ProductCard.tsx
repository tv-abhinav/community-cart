import { bookmark_product } from '@/Services/common/bookmark';
import { add_to_cart } from '@/Services/common/cart';
import { RootState } from '@/Store/store';
import { ProductSchema } from '@/model/Product';
import { CustomerSchema, UserSessionSchema } from '@/model/User';
import { setUserData } from '@/utils/resolvers/UserDataSlice';
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'
import { BsCartPlus } from 'react-icons/bs'
import { MdFavorite } from 'react-icons/md';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';


export default function ProductCard({ item }: { item: ProductSchema }) {
    const router = useRouter();

    const user = useSelector((state: RootState) => state.User.userData) as UserSessionSchema | null
    const custId = useSelector((state: RootState) => state.Customer.CustomerData?.customerId) as string | null

    const AddToCart = async () => {
        if(custId) {
        const finalData = { productId: item.productId, customerId: custId }
        const res = await add_to_cart(finalData);
        if (res?.status === 200) {
            toast.success("Action successful");
        } else {
            toast.error(res?.statusText)
        }
    } else {
        toast.error("Please login to add to cart");
    }
    }


    const AddToBookmark  =  async () => {
        if(custId) {
            const finalData = { productId: item.productId, customerId: custId }
            const res = await bookmark_product(finalData);
            if (res?.status === 200) {
                toast.success("Action successful");
            } else {
                toast.error(res?.statusText)
            }
        } else {
            toast.error("Please login to bookmark");
        }
    }


    return (
        <div  className="card text-black cursor-pointer card-compact m-3 w-80 bg-white shadow-xl relative">
            <div onClick={() => router.push(`/product/product-detail/${item.productId}`)} className='w-full rounded relative h-60'>
                <Image src={item.productImageUrl || '/images98.jpg'} alt='no Image' className='rounded' fill />
            </div>

            <div className="card-body">
                <h2 className="card-title" onClick={() => router.push(`/product/product-detail/${item.productId}`)}>{item.productName} </h2>
                <p className='font-semibold' onClick={() => router.push(`/product/product-detail/${item.productId}`)}>{`Rs ${item.productPrice}`}</p>
                <div className="card-actions justify-end z-20">
                    <button type='button' title='Cart' onClick={AddToCart} className="btn  btn-circle btn-ghost "><BsCartPlus className='text-2xl text-orange-600 font-semibold' /></button>
                    <button type='button' title='Bookmark' onClick={AddToBookmark} className="btn btn-circle btn-ghost absolute top-0 right-0 "><MdFavorite className='text-2xl text-orange-600 font-semibold' /></button>
                </div>
            </div>
        </div>
    )
}
