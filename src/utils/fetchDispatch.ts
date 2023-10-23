import { get_all_categories } from "@/Services/Admin/category";
import { get_seller } from "@/Services/Admin/seller";
import { get_all_orders } from "@/Services/Admin/order";
import { get_all_products } from "@/Services/Admin/product";


export const fetchSellerData = async (email: string) => {
  try {
    console.log("Inside F&D");
    const sellerRes = await get_seller(email)
    const catRes = await get_all_categories(email)
    const prdRes = await get_all_products(email)
    // const ordRes = await get_all_orders(email)
    console.log("Got seller & cat data");
    // const isFetchSuccess = sellerRes.status === 200 && catRes.status === 200;

    return {
      sellerRes,
      catRes,
      prdRes
      // ordRes,
    };
  } catch (error) {
    throw new Error('Error in fetching (service) =>' + error)
    // console.log('Error in getting all Categories (service) =>', error)
  }
}