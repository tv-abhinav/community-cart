import { CreateProductSchema, ProductSchema } from "@/model/Product";
import axios from "axios";
import Cookies from "js-cookie";



export const add_new_product = async (formData: CreateProductSchema) => {
  try {
    console.log(formData)
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/addProduct`, JSON.stringify(formData), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    });

    // const data = {
    //   message: "New Product Added",
    //   success: true
    // }
    return res;
  } catch (error) {
    throw new Error('Error in Add New Category (service) =>' + error);
  }
}

export const upload_product_photo = async (photo: File, productId: string) => {

  try {
      console.log(photo);
      var photoFormData = new FormData();
      photoFormData.append('productImage', photo);

      const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/uploadImage/product/${productId}`,
          photoFormData,
          {
              headers: {
                  'Content-Type': 'multipart/form-data'
              }
          })
      console.log(res.data);
      // const data = {
      //     success: true,
      //     message: "User Registered"
      // }
      return res;
  } catch (error) {
      throw new Error('error in register (service) => ' + error);
      // console.log('error in register (service) => ', error);
  }
}


export const get_all_products = async (email?: string) => {
  try {
    let endpoint = email ? `/${email}` : ""
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getProducts${endpoint}`);

    // const data: {
    //   data: ProductSchema[],


    // } = {
    //   data: [{
    //     _id: "100",
    //     sellerId: "123",
    //     productName: "Macbook Pro",
    //     productDescription: "2023 latest Macbook",
    //     productImage: "https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg",
    //     productSlug: "6123",
    //     productPrice: 130000,
    //     productQuantity: 3,
    //     productFeatured: true,
    //     productCategory: {
    //       _id: "123",
    //       categoryName: "abc"
    //     },
    //     createdAt: "2023-10-25",
//     //     updatedAt: "2023-10-25",
//     //   }],
//     //   message: "Fetched all Products",
//     //   success: true
//     // }
    return res;
  } catch (error) {
    throw new Error('Error in getting all products (service) =>' + error)
  }
}


export const delete_a_product = async (id: string) => {
  try {
    const res = await axios.delete(`/api/Admin/product/delete-product?id=${id}`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
    })
    // const data = {
    //   message: "Product Deleted",
    //   success: true
    // }
    return res;
  } catch (error) {
    throw new Error('Error in deleting Product (service) =>' + error)
  }
}


export const update_a_product = async (formData: any) => {
  try {
    const res = await axios.put(`/api/Admin/product/update-product`, JSON.stringify(formData), {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`,
        'Content-Type': 'application/json'
      }
    })

    console.log(formData)

    // const data = {
    //   message: "New Product Added",
    //   success: true
    // }
    return res;
  } catch (error) {
    throw new Error('Error in updating Product (service) =>' + error)
  }
}

export const get_product_by_id = async (id: string) => {
  try {
    const res = await fetch(`/api/common/product/get-product-by-id?id=${id}`, {
      method: 'GET',
    })

    // const data: {
    //   data: ProductSchema,


    // } = {
    //   data: {
    //     _id: "100",
    //     productName: "Macbook Pro",
    //     productDescription: "2023 latest Macbook",
    //     productImage: "https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg",
    //     productSlug: "6123",
    //     productPrice: 130000,
    //     productQuantity: 3,
    //     productFeatured: true,
    //     productCategory: {
    //       _id: "123",
    //       categoryName: "abc"
    //     },
    //     createdAt: "2023-10-25",
    //     updatedAt: "2023-10-25",
    //     sellerId: "123"
    //   },
    //   message: "Fetched all Products",
    //   success: true
    // }
    return res;
  } catch (error) {
    // console.log('Error in getting product by ID (service) =>', error)
    throw new Error('Error in getting product by ID (service) =>' + error);
  }
}



// export const get_product_by_category_id = async (id: string) => {
//   try {
//     const res = await fetch(`/api/common/product/get-product-by-category-id?id=${id}`, {
//       method: 'GET',
//     })

//     // const data = {
//     //   data: [{
//     //     productName: "Macbook Pro",
//     //     productImage: "https://images.pexels.com/photos/249538/pexels-photo-249538.jpeg",
//     //     productPrice: 130000,
//     //     productSlug: "6123",
//     //     productFeatured: true,
//     //     productCategory: {
//     //       categoryName: "Laptop",
//     //       categoryDescription: "Personal Computing devices",
//     //       _id: "1000",
//     //     },
//     //     _id: "100"
//     //   }],
//     //   message: "Fetched all Products",
//     //   success: true
//     // }
//     return res;
//   } catch (error) {
//     throw new Error('Error in getting product by category ID (service) =>' + error)
//   }
// }