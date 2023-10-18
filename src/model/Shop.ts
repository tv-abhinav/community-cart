import { CategorySchema } from "./Category";

export interface ShopSchema {
    shop_name: string,
    shop_images: string[], // can be modified to have captions
    shop_address: string,
    categories: CategorySchema[],
    shopSlug : string,
}