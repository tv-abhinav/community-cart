

import { CategorySchema } from "@/model/Category";
import { SellerSchema, UpdateSellerSchema, CreateSellerSchema } from "@/model/Seller";
import axios from "axios";
import Cookies from "js-cookie";


export const get_seller = async (email?: string) => {
  try {
    console.log("getting seller")
    const endpoint = email ? `/${email}` : "";
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getSeller${endpoint}`);
    return res;
  } catch (error) {
    throw new Error('Error in getting all Categories (service) =>' + error)
    // console.log('Error in getting all Categories (service) =>', error)
  }
}

// export const get_seller_by_email = async (endpoint: string) => {
//   try {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`);
//     // const data: {
//     //   data: SellerSchema,
//     //   
//     //   
//     // } =
//     // {
//     //   data: {
//     //     _id: id,
//     //     shopName: "Test Seller 1",
//     //     shopDescription: "Test Description 1",
//     //     shopImages: ["/public/images98.jpg"],
//     //     shopSlug: "\\testcat1"
//     //   },
//     //   message: "Got all categories",
//     //   success: true
//     // }
//     // const data = await res.json();
//     return res;
//   } catch (error) {
//     throw new Error('Error in getting all Categories (service) =>' + error)
//     // console.log('Error in getting all Categories (service) =>', error)
//   }
// }

// export const get_categories_for_seller = async (endpoint: string) => {
//   try {
//     const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`);
//     // const data: {
//     //   data: CategorySchema[],
//     //   
//     //   
//     // } =
//     // {
//     //   data: [{
//     //     _id: "123",
//     //     createdAt: "2023-10-25",
//     //     updatedAt: "2023-10-25",
//     //     categoryName: "Test Cat 1",
//     //     categoryDescription: "Test Description 1",
//     //     categoryImage: "/public/images98.jpg",
//     //     categorySlug: "\\testcat1"
//     //   }],
//     //   message: "Got all categories",
//     //   success: true
//     // }
//     // const data = await res.json();
//     return res;
//   } catch (error) {
//     throw new Error('Error in getting all Categories (service) =>' + error)
//     // console.log('Error in getting all Categories (service) =>', error)
//   }
// }

export const add_new_seller = async (formData: CreateSellerSchema) => {
  try {
    const res = await axios.post(`/api/Admin/category/add-category`, JSON.stringify(formData), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    });

    console.log(formData);
    // const data = {
    //   message: "Seller added",
    //   success: true
    // }
    // const data = await res.json();
    return res;
  } catch (error) {
    throw new Error('Error in Add New Seller (service) =>' + error);
    // console.log('Error in Add New Seller (service) =>', error);
  }
}

export const delete_seller = async (id: string) => {
  try {
    const res = await axios.delete(`/api/Admin/category/delete-category?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
    })

    // const data = await res.json();
    // const data =
    // {
    //   message: `Seller ${id} deleted`,
    //   success: true
    // }

    return res;
  } catch (error) {
    throw new Error('Error in deleting Categories (service) =>' + error);
    // console.log('Error in deleting Categories (service) =>', error)
  }
}


export const update_a_category = async (formData: UpdateSellerSchema) => {
  try {
    const res = await axios.put(`/api/Admin/category/update-category`, JSON.stringify(formData), {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })
    // const data = await res.json();
    console.log(formData);
    // const data =
    // {
    //   message: `Seller updated`,
    //   success: true
    // }
    return res;
  } catch (error) {
    throw new Error('Error in updating Categories (service) =>' + error);
    // console.log('Error in updating Categories (service) =>', error)
  }
}




