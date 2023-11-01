
import { BookmarkSchema, CreateBookmarkSchema } from "@/model/Bookmark";
import axios from "axios";
import Cookies from "js-cookie";

export const bookmark_product = async (formData: CreateBookmarkSchema) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/bookmarkProduct`, JSON.stringify(formData), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    });
    // const data = await res.json();
    console.log(formData);
    // const data = { success: true, message: "Product added to Favourites!" };
    return res;
  } catch (error) {
    console.log('Error in Add product to bookmark (service) =>', error);
  }
}



export const get_all_bookmark_items = async (id: any) => {
  try {
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getBookmarkProduct`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
      params:{
        bookmarkId: id
      }
    });
    // const data = await res.json();
    // const data:{
    //   data: BookmarkSchema[],
      
      
    // } = {
    //   data: [
    //     {
    //       _id:"123",
    //       customerId: "456",
    //       product: {
    //         productImage: "testprdimageurl",
    //         productName: "Test Name",
    //         productPrice: 1,
    //         productQuantity: 1
    //       },
    //     }
    //   ],
    //   message: "Bookmarks found",
    //   success: true
    // }
    return res;
  } catch (error) {
    console.log('Error in getting all bookmark Item for specific User (service) =>', error)
  }
}


export const delete_a_bookmark_item = async (id: string) => {
  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/removeBookmarkProduct`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
      params:{
        bookmarkId: id
      }
    })

    // const data = await res.json();
    // const data = { success: true, message: "Bookmark deleted!" };
    return res;
  } catch (error) {
    console.log('Error in deleting Bookmark Item (service) =>', error)
  }
}
