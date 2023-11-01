

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
    // const data = await res.json();

    // const data:{
    //   data: CreateOrderSchema[],


    // } =
    // {
    //   data: [{
    //     customerId: "123",
    //     sellerId:"123",
    //     orderItems: [
    //       {
    //         qty: 1,
    //         product: {
    //           _id:"100",
    //           sellerId:"123",
    //           productName : "Macbook Pro",
    //           productDescription :"2023 latest Macbook" ,
    //           productImage : "https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg" ,
    //           productSlug : "6123",
    //           productPrice : 130000,
    //           productQuantity : 3,
    //           productFeatured : true,
    //           createdAt: "2023-10-15",
    //           updatedAt: "2023-10-15",
    //           productCategory: {
    //             _id: "123",
    //             categoryName: "Laptop"
    //           }
    //       },

    //       }
    //     ],
    //     shippingAddress: {
    //       address1: "Kerala",
    //       address2: "Kerala 2",
    //       city: "Palakkad",
    //       pinCode: "12345",
    //       country: "India",
    //       district:"",
    //       state:"",
    //       latitude:123,
    //       longitude:456
    //     },
    //     paymentMethod: "GPay", // default : "Paypal"
    //     paymentResult: {
    //       id: "1",
    //       status: "Paid",
    //       update_time: "2023-10-15",
    //       email_address: "abcd@gmail.com",
    //     },
    //     itemsPrice: 14800,
    //     shippingPrice: 100,
    //     taxPrice: 100,
    //     totalPrice: 15000,
    //     isPaid: true, // default: false
    //     paidAt: new Date("2023-10-15"),
    //     status: "packed", // default: false
    //     deliveredAt: new Date("2023-10-25"),
    //   }],

    //   message: "Got all orders",
    //   success: true
    // }
    return res;
  } catch (error) {
    console.log('Error in getting all orders (service) =>', error)
  }
}



export const update_order_status = async (id: string, status: StatusEnum) => {
  console.log(id)
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

    // const data = {
    //   message: `Status Updated to ${status}`,
    //   success: true
    // }
    return res;
  } catch (error) {
    console.log('Error in updating order status (service) =>', error)
  }
}

