
import Cookies from "js-cookie";

export const create_a_new_order = async (formData: any) => {
  try {
    // const res = await fetch(`/api/common/order/create-order`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${Cookies.get('token')}`
    //   },
    //   body: JSON.stringify(formData),
    // });
    const data = {
      message: "Product is on the way.Order Created",
      success: true
    }
    return data;
  } catch (error) {
    throw new Error('Error in creating Order (service) =>'+ error);
  }
}



export const get_all_orders_of_user = async (id: any) => {
  try {
    // const res = await fetch(`/api/common/order/view-order?id=${id}`, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${Cookies.get('token')}`
    //   }
    // });
    const data = {
      data:[{
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
            fullName: "Ashish",
            address: "TN",
            city: "Chennai",
            postalCode: 12345,
            country: "India",
        },
        paymentMethod: "Gpay", // default : "Paypal"
        paymentResult: {
            id: "156",
            status: "Success",
            update_time: "2023-10-05",
            email_address: "cde@gmail.com",
        },
        itemsPrice: 650,
        shippingPrice: 10,
        taxPrice: 10,
        totalPrice: 670,
        isPaid: true, // default: false
        paidAt: "2023-10-05",
        isDelivered: true, // default: false
        deliveredAt: "2023-10-11",
      }],
      message: "Fetched all orders of a user",
      success: true
      
    }
    return data;
  } catch (error) {
    throw new Error('Error in getting all orders Item for specific User (service) =>'+ error)
  }
}


export const get_order_details= async (id: any) => {
  try {
  //   const res = await fetch(`/api/common/order/order-Details?id=${id}`, {
  //     method: 'GET',
  //     headers: {
  //       'Authorization': `Bearer ${Cookies.get('token')}`
  //     }
  //   });
  //   console.log(res)
  // const data = await res.json();
  const data = {
    data:[{
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
          fullName: "Ashish",
          address: "TN",
          city: "Chennai",
          postalCode: 12345,
          country: "India",
      },
      paymentMethod: "Gpay", // default : "Paypal"
      paymentResult: {
          id: "156",
          status: "Success",
          update_time: "2023-10-05",
          email_address: "cde@gmail.com",
      },
      itemsPrice: 650,
      shippingPrice: 10,
      taxPrice: 10,
      totalPrice: 670,
      isPaid: true, // default: false
      paidAt: "2023-10-05",
      isDelivered: true, // default: false
      deliveredAt: "2023-10-11",
    }],
    message: "Fetched all orders of a user",
    success: true
    
  }
  
    return data;
  } catch (error) {
    console.log('Error in getting all orders Item for specific User (service) =>', error)
  }
}