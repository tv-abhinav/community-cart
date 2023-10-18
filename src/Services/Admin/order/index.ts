

import { CreateOrderSchema, StatusEnum } from "@/model/Order";
import Cookies from "js-cookie";


export const get_all_orders = async () => {
  try {
    // const res = await fetch('/api/Admin/order/get-all-order-data', {
    //   method: 'GET',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${Cookies.get('token')}`
    //     },
    // });
    //const data = await res.json();

    const data:{
      data: CreateOrderSchema[],
      message: string,
      success: boolean
    } =
    {
      data: [{
        customerID: "123",
        shopID:"123",
        orderItems: [
          {
            qty: 1,
            product: {
              _id:"100",
              shopID:"123",
              productName : "Macbook Pro",
              productDescription :"2023 latest Macbook" ,
              productImage : "https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg" ,
              productSlug : "6123",
              productPrice : 130000,
              productQuantity : 3,
              productFeatured : true,
              productCategory: "Laptop"
          },

          }
        ],
        shippingAddress: {
          address1: "Kerala",
          address2: "Kerala 2",
          city: "Palakkad",
          postalCode: 12345,
          country: "India",
          district:"",
          state:"",
          latitude:123,
          longitude:456
        },
        paymentMethod: "GPay", // default : "Paypal"
        paymentResult: {
          id: "1",
          status: "Paid",
          update_time: "2023-10-15",
          email_address: "abcd@gmail.com",
        },
        itemsPrice: 14800,
        shippingPrice: 100,
        taxPrice: 100,
        totalPrice: 15000,
        isPaid: true, // default: false
        paidAt: new Date("2023-10-15"),
        status: "packed", // default: false
        deliveredAt: new Date("2023-10-25"),
      }],

      message: "Got all orders",
      success: true
    }
    return data;
  } catch (error) {
    console.log('Error in getting all orders (service) =>', error)
  }
}



export const update_order_status = async (id: string, status: StatusEnum) => {
  console.log(id)
  try {
    // const res = await fetch(`/api/Admin/order/update-order-status`, {
    //   method: 'PUT',
    //   headers: {
    //     'Authorization': `Bearer ${Cookies.get('token')}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(id),
    // })

    const data = {
      message: `Status Updated to ${status}`,
      success: true
    }
    return data;
  } catch (error) {
    console.log('Error in updating order status (service) =>', error)
  }
}

