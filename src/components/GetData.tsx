"use client"

import { get_all_categories } from '@/Services/Admin/category';
import { get_all_products } from '@/Services/Admin/product';
import { get_seller } from '@/Services/Admin/seller';
import { get_all_bookmark_items } from '@/Services/common/bookmark';
import { RootState } from '@/Store/store';
import { ProductSchema } from '@/model/Product';
import { SellerSchema } from '@/model/Seller';
import { CustomerSchema, UserSessionSchema } from '@/model/User';
import { setIsFetchingCustomer } from '@/utils/resolvers/CustomerDataSlice';
import { setCategoriesForSeller, setProductData, setSellerData } from '@/utils/resolvers/SellerSlice';
import { setUserData } from '@/utils/resolvers/UserDataSlice';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'

export default function GetData(props: {onLoad: Function}) {
    const dispatch = useDispatch();
    const customer = useSelector((state: RootState) => state.Customer.CustomerData) as CustomerSchema | null
    const seller = useSelector((state: RootState) => state.Seller.seller) as SellerSchema | null
    const products = useSelector((state: RootState) => state.Seller.product) as { [id: string]: ProductSchema } | null

    const fetchSellerData = async (sellerId: number) => {
        try {
            if(seller?.sellerId === sellerId) return;

            console.log("Fetching seller data");
            const sellerRes = await get_seller({ sellerId })
            if (sellerRes.status === 200) dispatch(setSellerData(sellerRes.data))
            
            const catRes = await get_all_categories(sellerId)
            if (catRes.status === 200) dispatch(setCategoriesForSeller(catRes.data))
            
            console.log("before:")
            console.log(products)

            const prdRes = await get_all_products({ sellerId })
            if (prdRes.status === 200) dispatch(setProductData(prdRes.data))
            
            console.log("Got seller & cat data");
            console.log(prdRes);
            props.onLoad()
        } catch (error) {
            throw new Error('Error in fetching (service) =>' + error)
            // console.log('Error in getting all Categories (service) =>', error)
        }
    }

    const fetchCustomerData = async (email: string) => {
        try {
            dispatch(setIsFetchingCustomer(true))
            if(customer?.email === email) return;
            console.log("Fetching customer data");
            // const custRes = await get_customer({ email })
            // if (custRes.status === 200) dispatch(setSellerData(sellerRes.data))

            // const bookmarkRes = await get_all_bookmark_items({ email })
            // if (bookmarkRes.status === 200) dispatch(setSellerData(sellerRes.data))

            // const cartRes = await get_cart({ email })
            // if (cartRes.status === 200) dispatch(setSellerData(sellerRes.data))

            // const ordRes = await get_customer_orders(email)
            // if (ordRes.status === 200) dispatch(setSellerData(sellerRes.data))

            console.log("Got customer data");
        } catch (error) {
            throw new Error('Error in fetching (service) =>' + error)
            // console.log('Error in getting all Categories (service) =>', error)
        }
    }

    useEffect(() => {
        const userData = localStorage.getItem('user');
        if (!userData) return;
        const userObj: UserSessionSchema | null = JSON.parse(userData)
        if(!userObj) return;
        
        dispatch(setUserData(userObj));
        if (userObj.role === "SELLER") {
            if (userObj.sellerId) fetchSellerData(userObj.sellerId)
        } else {
            fetchCustomerData(userObj.sub)
        }
    },[])
    return null;
}
