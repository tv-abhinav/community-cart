import { CreateProductSchema, ProductSchema } from "@/model/Product";
import Cookies from "js-cookie";



export const add_new_product = async (formData: CreateProductSchema) => {
  try {
    // const res = await fetch(`/api/Admin/product/add-product`, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         'Authorization': `Bearer ${Cookies.get('token')}`
    //     },
    //     body: JSON.stringify(formData),
    // });
    console.log(formData)

    const data = {
      message: "New Product Added",
      success: true
    }
    return data;
  } catch (error) {
    throw new Error('Error in Add New Category (service) =>' + error);
  }
}


export const get_all_products = async () => {
  try {
    // const res = await fetch('/api/common/product/getProduct', {
    //   method: 'GET',
    // });

    const data:{
      data: ProductSchema[],
      message: string,
      success: boolean
    } = {
      data: [{
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
    }],
      message: "Fetched all Products",
      success:true
    }
    return data;
  } catch (error) {
    throw new Error('Error in getting all products (service) =>'+ error)
  }
}


export const delete_a_product = async (id: string) => {
  try {
    // const res = await fetch(`/api/Admin/product/delete-product?id=${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Authorization': `Bearer ${Cookies.get('token')}`
    //   },
    // })
    const data = {
      message: "Product Deleted",
      success: true
    }
    return data;
  } catch (error) {
    throw new Error('Error in deleting Product (service) =>' + error)
  }
}


export const update_a_product = async (formData: any) => {
  try {
    // const res = await fetch(`/api/Admin/product/update-product`, {
    //   method: 'PUT',
    //   headers: {
    //     'Authorization': `Bearer ${Cookies.get('token')}`,
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(formData),
    // })

    console.log(formData)

    const data = {
      message: "New Product Added",
      success: true
    }
    return data;
  } catch (error) {
    throw new Error('Error in updating Product (service) =>'+ error)
  }
}

export const get_product_by_id = async (id: string) => {
  try {
    // const res = await fetch(`/api/common/product/get-product-by-id?id=${id}`, {
    //   method: 'GET',
    // })

    const data = {
      data: {
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
      message: "Fetched all Products",
      success:true
    }
    return data;
  } catch (error) {
    // console.log('Error in getting product by ID (service) =>', error)
    throw new Error('Error in getting product by ID (service) =>' + error);
  }
}



export const get_product_by_category_id = async (id: string) => {
  try {
    // const res = await fetch(`/api/common/product/get-product-by-category-id?id=${id}`, {
    //   method: 'GET',
    // })

    const data = {
      data: [{
        productName : "Macbook Pro",
        productImage : "https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg" ,
        productPrice : 130000,
        productSlug : "6123",
        productFeatured : true,
        productCategory : {
          categoryName : "Laptop",
          categoryDescription  :"Personal Computing devices" ,
          _id : "1000",
        },
        _id:"100"
    }],
      message: "Fetched all Products",
      success:true
    }
    return data;
  } catch (error) {
    throw new Error('Error in getting product by category ID (service) =>'+ error)
  }
}