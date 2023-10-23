import { ProductHighLevelFeatures } from "./Product";

export interface CreateBookmarkSchema {
    customerID: string,
    productId: string,
}
export interface BookmarkSchema {
    _id: string,
    customerID: string,
    product: ProductHighLevelFeatures,
}