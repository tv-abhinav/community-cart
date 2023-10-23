

import { CartViewSchema } from "@/model/Cart";
import axios from "axios";
import Cookies from "js-cookie";

export const add_to_cart = async (formData: any) => {
  try {
    const res = await axios.post(`/api/common/cart/add-to-cart`, JSON.stringify(formData), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    });
    console.log(formData)
    // const data = {
    //   message: "Product Deleted",
    //   success: true
    // }
    return res;
  } catch (error) {
    throw new Error('Error in Add product to cart (service) =>' + error);
  }
}

// export const get_all_cart_Items = async (id: string) => {
//   try {
//     // const res = await fetch(`/api/common/cart/get-cart-items?id=${id}`, {
//     //   method: 'GET',
//     //   headers: {
//     //     'Authorization': `Bearer ${Cookies.get('token')}`
//     //   }
//     // });
//     const data:{
//       data:CartViewSchema[],
      
      
//     } = {
//       data: [{
//         _id:"",
//         userID: "", // populate product details in backend
//         product: {
//           _id:"",
//           productImage:"",
//           productName:"",
//           productPrice:"1 rs",
//           productQuantity:1
//         },
//         quantity: 2,
//       }],
//       message: "Fetched all Cart Items",
//       success: true

//     }
//     return res;
//   } catch (error) {
//     throw new Error('Error in getting all cart Item for specific User (service) =>' + error)
//   }
// }


export const delete_a_cart_item = async (id: string) => {
  try {
    const res = await axios.delete(`/api/common/cart/remove-from-cart?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
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



