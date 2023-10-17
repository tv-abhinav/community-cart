

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

    const data =
    {
      data: [{
        user: {
          name: "Test Name",
          email: "abc@gmail.com",
          password: "testpass",
          role: "user" // default: 'user', enum: ['user', 'admin']
      },
        orderItems: [
          {
            qty: 1,
            product: {
              _id:"100",
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
          fullName: "Saurav S",
          address: "Kerala",
          city: "Palakkad",
          postalCode: 12345,
          country: "India",
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
        paidAt: "2023-10-15",
        isDelivered: false, // default: false
        deliveredAt: "2023-10-25",
      }],

      message: "Got all orders",
      success: true
    }
    return data;
  } catch (error) {
    console.log('Error in getting all orders (service) =>', error)
  }
}



export const update_order_status = async (id: any) => {
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
      message: "Status Updated",
      success: true
    }
    return data;
  } catch (error) {
    console.log('Error in updating order status (service) =>', error)
  }
}

