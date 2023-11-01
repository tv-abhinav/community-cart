import { ProductHighLevelFeatures } from "./Product";

export interface CreateBookmarkSchema {
    customerId: string,
    productId: string,
}
export interface BookmarkSchema {
    _id: string,
    customerId: string,
    product: ProductHighLevelFeatures,
}