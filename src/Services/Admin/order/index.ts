

import { CreateOrderSchema, StatusEnum } from "@/model/Order";
import axios from "axios";
import Cookies from "js-cookie";


export const get_all_orders = async (email: string) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getAllOrders/${email}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
    });

    return res;
  } catch (error) {
    console.log('Error in getting all orders (service) =>', error)
  }
}



export const update_order_status = async (id: string, status: StatusEnum) => {
  try {
    const res = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/updateOrderStatus`, {
      orderId: id,
      status: status
    }, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })

    return res;
  } catch (error) {
    console.log('Error in updating order status (service) =>', error)
  }
}

