export interface ProductSchema {
    _id:string,
    productName : string,
    productDescription :string ,
    productImage : string ,
    productSlug : string,
    productPrice : number,
    productQuantity : number,
    productFeatured : boolean,
    productCategory: string,
    shopID: string,
}