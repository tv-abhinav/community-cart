

import { AddToCartSchema, CartViewSchema } from "@/model/Cart";
import axios from "axios";
import Cookies from "js-cookie";

export const add_to_cart = async (product: AddToCartSchema, customerId: number) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/addtocart`, JSON.stringify(product), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
      params:{
        customerId
      }
    });

    return res;
  } catch (error) {
    throw new Error('Error in Add product to cart (service) =>' + error);
  }
}

export const get_all_cart_Items = async (customerId: number) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/viewcart`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
      params: { customerId }
    });

    return res;
  } catch (error) {
    throw new Error('Error in getting all cart Item for specific User (service) =>' + error)
  }
}


export const delete_a_cart_item = async (customerId: number, productId?: number) => {
  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/removeCart`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
      params: productId ? { customerId, productId } : { customerId }
    })

    // const data = {
    //   message: "Deleted a Cart Items",
    //   success: true
    // }
    return res;
  } catch (error) {
    throw new Error('Error in deleting cart items (service) =>'+ error)
  }
}



