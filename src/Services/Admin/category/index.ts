

import { CategorySchema, UpdateCategorySchema, CreateCategorySchema } from "@/model/Category";
import Cookies from "js-cookie";


export const get_all_categories = async () => {
  try {
    // const res = await fetch('/api/common/category/getCategory', {
    //   method: 'GET',
    // });
    const data:{
      data: CategorySchema[],
      message: string,
      success: boolean
    } =
    {
      data: [{
        _id:"123",
        createdAt: "2023-10-25",
        updatedAt: "2023-10-25",
        categoryName: "Test Cat 1",
        categoryDescription: "Test Description 1",
        categoryImage: "/public/images98.jpg",
        categorySlug: "\\testcat1"
      }],
      message: "Got all categories",
      success: true
    }
    // const data = await res.json();
    return data;
  } catch (error) {
    throw new Error('Error in getting all Categories (service) =>' + error)
    // console.log('Error in getting all Categories (service) =>', error)
  }
}

export const add_new_category = async (formData: CreateCategorySchema) => {
  try {
    // const res = await fetch(`/api/Admin/category/add-category`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${Cookies.get('token')}`
    //   },
    //   body: JSON.stringify(formData),
    // });

    console.log(formData);
    const data = {
      message: "Category added",
      success: true
    }
    // const data = await res.json();
    return data;
  } catch (error) {
    throw new Error('Error in Add New Category (service) =>' + error);
    // console.log('Error in Add New Category (service) =>', error);
  }
}


export const get_category_by_id = async (id: string) => {
  try {
    // const res = await fetch(`/api/common/category/get-category-by-id?id=${id}`, {
    //   method: 'GET',
    // })

    // const data = await res.json();
    const data:{
      data: CategorySchema,
      message: string,
      success: boolean
    } =
    {
      data: {
        _id:"123",
        createdAt: "2023-10-25",
        updatedAt: "2023-10-25",
        categoryName: "Test Cat 1",
        categoryDescription: "Test Description 1",
        categoryImage: "/public/images98.jpg",
        categorySlug: "\\testcat1"
      },
      message: "get_category_by_id success",
      success: true
    }

    return data;
  } catch (error) {
    throw new Error('Error in getting Categories by ID (service) =>' + error);
    // console.log('Error in getting Categories by ID (service) =>', error)
  }
}

export const delete_a_category = async (id: string) => {
  try {
    // const res = await fetch(`/api/Admin/category/delete-category?id=${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Authorization': `Bearer ${Cookies.get('token')}`
    //   },
    // })

    // const data = await res.json();
    const data =
    {
      message: `Category ${id} deleted`,
      success: true
    }

    return data;
  } catch (error) {
    throw new Error('Error in deleting Categories (service) =>' + error);
    // console.log('Error in deleting Categories (service) =>', error)
  }
}


export const update_a_category = async (formData: UpdateCategorySchema) => {
  try {
    // const res = await fetch(`/api/Admin/category/update-category`, {
    //   method: 'PUT',
    //   headers: {
    //     'Authorization': `Bearer ${Cookies.get('token')}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData),
    // })
    // const data = await res.json();
    console.log(formData);
    const data =
    {
      message: `Category updated`,
      success: true
    }
    return data;
  } catch (error) {
    throw new Error('Error in updating Categories (service) =>' + error);
    // console.log('Error in updating Categories (service) =>', error)
  }
}




