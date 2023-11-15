"use client"

import { get_all_categories } from '@/Services/Admin/category';
import { get_all_orders } from '@/Services/Admin/order';
import { get_all_products } from '@/Services/Admin/product';
import { get_seller } from '@/Services/Admin/seller';
import { get_customer } from '@/Services/auth/customer';
import { get_all_bookmark_items } from '@/Services/common/bookmark';
import { get_all_cart_Items } from '@/Services/common/cart';
import { get_customer_orders } from '@/Services/common/order';
import { RootState } from '@/Store/store';
import { CategorySchema } from '@/model/Category';
import { ProductSchema } from '@/model/Product';
import { SellerSchema } from '@/model/Seller';
import { CustomerSchema, UserSessionSchema } from '@/model/User';
import { setBookmark } from '@/utils/resolvers/Bookmark';
import { setCart } from '@/utils/resolvers/CartSlice';
import { setCustomerData } from '@/utils/resolvers/CustomerDataSlice';
import { setOrder } from '@/utils/resolvers/OrderSlice';
import { setAllCategories, setCategoriesForSeller, setOrderData, setProductData, setSellerData } from '@/utils/resolvers/SellerSlice';
import { setUserData } from '@/utils/resolvers/UserDataSlice';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

export default function GetData(props: {hasToFetch: boolean, onLoad: Function}) {
    const dispatch = useDispatch();
    const customer = useSelector((state: RootState) => state.Customer.CustomerData) as CustomerSchema | null
    const allCats = useSelector((state: RootState) => state.Seller.allCategories) as CategorySchema[]
    // const products = useSelector((state: RootState) => state.Seller.product) as { [id: string]: ProductSchema } | null

    const fetchSellerData = async (sellerId: number) => {
        try {
            props.onLoad(true)
            // if(seller?.sellerId === sellerId) {
            //     props.onLoad(false);
            //     return;
            // }
            const sellerRes = await get_seller({ sellerId })
            if (sellerRes.status === 200) dispatch(setSellerData(sellerRes.data[0]))
            
            const allCatRes = await get_all_categories()
            if (allCatRes.status === 200) dispatch(setAllCategories(allCatRes.data))

            if(allCats.length === 0) {
                const catRes = await get_all_categories(sellerId)
                if (catRes.status === 200) dispatch(setCategoriesForSeller(catRes.data))
            }

            const prdRes = await get_all_products({ sellerId })
            if (prdRes.status === 200) dispatch(setProductData(prdRes.data))

            const ordRes = await get_all_orders(sellerId)
            if (ordRes && ordRes.status === 200) dispatch(setOrderData(ordRes.data))
            
            props.onLoad(false)
        } catch (error) {
            throw new Error('Error in fetching (service) =>' + error)
        }
    }

    const fetchCustomerData = async (custId: number) => {
        try {
            props.onLoad(true)
            if(customer?.customerId === custId) {
                props.onLoad(false);
                return;
            }
            const custRes = await get_customer(custId)
            if (custRes.status === 200) dispatch(setCustomerData(custRes.data))
            
            const bookmarkRes = await get_all_bookmark_items(custId)
            if (bookmarkRes?.status === 200) dispatch(setBookmark(bookmarkRes.data))
            
            const cartRes = await get_all_cart_Items(custId)
            if (cartRes.status === 200) dispatch(setCart(cartRes.data))
            
            const ordRes = await get_customer_orders(custId)
            if (ordRes?.status === 200) dispatch(setOrder(ordRes.data))
            props.onLoad(false)
        } catch (error) {
            throw new Error('Error in fetching (service) =>' + error)
        }
    }

    useEffect(() => {
        if(!props.hasToFetch) {
            props.onLoad(false) 
            return
        } 
        const userData = localStorage.getItem('user');
        if (!userData) {
            props.onLoad(false) 
            return;
        }
        const userObj: UserSessionSchema | null = JSON.parse(userData)
        if(!userObj) {
            props.onLoad(false) 
            return;
        }
        
        dispatch(setUserData(userObj));
        if (userObj.role === "SELLER") {
            if (userObj.sellerId) fetchSellerData(userObj.sellerId)
        } else if (userObj.customerId) {
            fetchCustomerData(userObj.customerId)
        } else {
            props.onLoad(false) 
            return;
        }

    },[props.hasToFetch])
    return null;
}
