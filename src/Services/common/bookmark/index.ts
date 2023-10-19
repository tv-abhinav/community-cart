
import { BookmarkSchema, CreateBookmarkSchema } from "@/model/Bookmark";
import Cookies from "js-cookie";

export const bookmark_product = async (formData: CreateBookmarkSchema) => {
  try {
    // const res = await fetch(`/api/common/bookmark/bookmark-product`, {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Authorization': `Bearer ${Cookies.get('token')}`
    //   },
    //   body: JSON.stringify(formData),
    // });
    // const data = await res.json();
    console.log(formData);
    const data = { success: true, message: "Product added to Favourites!" };
    return data;
  } catch (error) {
    console.log('Error in Add product to bookmark (service) =>', error);
  }
}



export const get_all_bookmark_items = async (id: any) => {
  try {
    // const res = await fetch(`/api/common/bookmark/get-bookmark-product?id=${id}`, {
    //   method: 'GET',
    //   headers: {
    //     'Authorization': `Bearer ${Cookies.get('token')}`
    //   }
    // });
    // const data = await res.json();
    const data:{
      data: BookmarkSchema[],
      message: string,
      success: boolean,
    } = {
      data: [
        {
          _id:"123",
          customerID: "456",
          product: {
            productImage: "testprdimageurl",
            productName: "Test Name",
            productPrice: 1,
            productQuantity: 1
          },
        }
      ],
      message: "Bookmarks found",
      success: true
    }
    return data;
  } catch (error) {
    console.log('Error in getting all bookmark Item for specific User (service) =>', error)
  }
}


export const delete_a_bookmark_item = async (id: string) => {
  try {
    // const res = await fetch(`/api/common/bookmark/remove-bookmark-product?id=${id}`, {
    //   method: 'DELETE',
    //   headers: {
    //     'Authorization': `Bearer ${Cookies.get('token')}`
    //   },
    // })

    // const data = await res.json();
    const data = { success: true, message: "Bookmark deleted!" };
    return data;
  } catch (error) {
    console.log('Error in deleting Bookmark Item (service) =>', error)
  }
}
