export interface CreateProductSchema {
    productName: string,
    productDescription: string,
    productImage: string,
    productSlug: string,
    productPrice: number,
    productQuantity: number,
    productFeatured: boolean,
    productCategory: string,
    shopID: string,
}

export interface ProductSchema extends CreateProductSchema {
    _id: string,
}

export interface UpdateProductSchema {
    _id: string,
    productName?: string,
    productDescription?: string,
    productImage?: string,
    productSlug?: string,
    productPrice?: number,
    productQuantity?: number,
    productFeatured?: boolean,
    productCategory?: string,
    shopID?: string,
}