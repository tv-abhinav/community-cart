

import { CategorySchema } from "@/model/Category";
import { SellerSchema, UpdateSellerSchema, CreateSellerSchema } from "@/model/Seller";
import axios from "axios";
import Cookies from "js-cookie";


export const get_seller = async (params: { categoryId?: number, sellerId?: number, sourceLatitude?: number, sourceLongitude?: number }) => {
  try {
    console.log("getting sellers")
    let queryParams: Partial<{
      categoryId: number,
      sellerId: number,
      sourceLatitude: number,
      sourceLongitude: number,
    }> = {};
    let endpoint = '/getSeller';

    if (false && params.sellerId) {
      queryParams.sellerId = params.sellerId;
    } else {
      // endpoint = '/getNearbySellers'
      if (params.sourceLatitude && params.sourceLongitude) {
        queryParams.sourceLatitude = params.sourceLatitude;
        queryParams.sourceLongitude = params.sourceLongitude;
      }
      
      queryParams.categoryId = params.categoryId ? params.categoryId : -1;
    }
    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}${endpoint}`, { params: queryParams });

    return res;
  } catch (error) {
    throw new Error('Error in getting all Categories (service) =>' + error)
    // console.log('Error in getting all Categories (service) =>', error)
  }
}

export const get_nearby_sellers = async (sourceLatitude: number, sourceLongitude: number) => {
  try {
    console.log("getting nearby sellers")

    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getNearbySellers`, {
      params: { sourceLatitude, sourceLongitude }
    });
    return res;
  } catch (error) {
    throw new Error('Error in getting all Categories (service) =>' + error)
    // console.log('Error in getting all Categories (service) =>', error)
  }
}

export const get_sellers_by_category_id = async (categoryId: number) => {
  try {
    console.log("getting sellers by category")

    const res = await axios.get(`${process.env.NEXT_PUBLIC_API_BASE_URL}/getNearbySellers`, { params: { categoryId } });
    return res;
  } catch (error) {
    throw new Error('Error in getting all Categories (service) =>' + error)
    // console.log('Error in getting all Categories (service) =>', error)
  }
}

export const add_new_seller = async (formData: CreateSellerSchema) => {
  try {
    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/addSeller`, JSON.stringify(formData), {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Cookies.get('token')}`
      }
    });
    console.log(formData);

    return res;
  } catch (error) {
    throw new Error('Error in Add New Seller (service) =>' + error);
    // console.log('Error in Add New Seller (service) =>', error);
  }
}

export const delete_seller = async (id: string) => {
  try {
    const res = await axios.delete(`${process.env.NEXT_PUBLIC_API_BASE_URL}/deleteSeller`, {
      headers: {
        'Authorization': `Bearer ${Cookies.get('token')}`
      },
      params: {
        sellerId: id
      }
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


export const update_a_seller = async (formData: UpdateSellerSchema) => {
  try {
    const res = await axios.put(`${process.env.NEXT_PUBLIC_API_BASE_URL}/updateSeller`, JSON.stringify(formData), {
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




