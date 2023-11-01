

import { CategorySchema, UpdateCategorySchema, CreateCategorySchema } from "@/model/Category";
import axios from "axios";
import Cookies from "js-cookie";


export const get_all_categories = async (sellerId?: number) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getSellerCategories`, {
      params: sellerId ? { sellerId } : {}
    });

    return res;
  } catch (error) {
    throw new Error('Error in getting all Categories (service) =>' + error)
    // console.log('Error in getting all Categories (service) =>', error)
  }
}

export const add_new_category = async (formData: CreateCategorySchema, email: string) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/addCategory/${email}`, JSON.stringify(formData), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    });

    console.log(formData);
    // const data = {
    //   message: "Category added",
    //   success: true
    // }
    // const data = await res.json();
    return res;
  } catch (error) {
    throw new Error('Error in Add New Category (service) =>' + error);
    // console.log('Error in Add New Category (service) =>', error);
  }
}


export const get_category_by_id = async (id: string) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getCategoryById`,
      {
        params: {
          categoryId: id
        }
      });

    // const data = await res.json();
    // const data: {
    //   data: CategorySchema,


    // } =
    // {
    //   data: {
    //     _id: "123",
    //     categoryName: "Test Cat 1",
    //     categoryDescription: "Test Description 1",
    //     categoryImage: "/public/images98.jpg",
    //     categorySlug: "\\testcat1"
    //   },
    //   message: "get_category_by_id success",
    //   success: true
    // }

    return res;
  } catch (error) {
    throw new Error('Error in getting Categories by Id (service) =>' + error);
    // console.log('Error in getting Categories by Id (service) =>', error)
  }
}

// export const get_categories_by_seller_id = async (id: string) => {
//   try {
//     const res = await fetch(`/api/common/category/get-category-by-id?id=${id}`, {
//       method: 'GET',
//     })

//     // const data = await res.json();
//     // const data: {
//     //   data: CategorySchema[],


//     // } =
//     // {
//     //   data: [{
//     //     _id: "123",
//     //     categoryName: "Test Cat 1",
//     //     categoryDescription: "Test Description 1",
//     //     categoryImage: "/public/images98.jpg",
//     //     categorySlug: "\\testcat1"
//     //   }],
//     //   message: "get_category_by_id success",
//     //   success: true
//     // }

//     return res;
//   } catch (error) {
//     throw new Error('Error in getting Categories by Id (service) =>' + error);
//     // console.log('Error in getting Categories by Id (service) =>', error)
//   }
// }

export const delete_a_category = async (id: string) => {
  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/deleteCategory`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
      params: {
        categoryId: id
      }
    })

    // const data = await res.json();
    // const data =
    // {
    //   message: `Category ${id} deleted`,
    //   success: true
    // }

    return res;
  } catch (error) {
    throw new Error('Error in deleting Categories (service) =>' + error);
    // console.log('Error in deleting Categories (service) =>', error)
  }
}


export const update_a_category = async (formData: UpdateCategorySchema) => {
  try {
    const res = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/updateCategory`, JSON.stringify(formData), {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })
    console.log(formData);
    // const data = await res.json();
    // const data =
    // {
    //   message: `Category updated`,
    //   success: true
    // }
    return res;
  } catch (error) {
    throw new Error('Error in updating Categories (service) =>' + error);
    // console.log('Error in updating Categories (service) =>', error)
  }
}




