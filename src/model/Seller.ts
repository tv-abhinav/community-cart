import { CategorySchema } from "./Category";
import { AddressSchema } from "./User";

export interface CreateSellerSchema {
    email: string,
    password: string,
    name: string,
    shopName: string,
    aadhaarNo: string,
    phoneNumber: string,
    shopSlug: string,
}

export interface SellerSchema {
    // seller details
    sellerId: number,
    email: string,
    sellerName: string,
    aadharNo: string,
    sellerAddress: AddressSchema,
    // profilePhoto?: string,
    // shop details
    shopName: string,
    shopPhotoUrl: string, // can be modified to have captions
    qrCodeLink: string,
    gstin: string,
    shopSlug: string,
}

export interface UpdateSellerSchema {
    // seller details
    sellerId: number,
    sellerName?: string,
    aadharNo?: string,
    sellerAddress?: AddressSchema,
    // shop details
    shopName?: string,
    shopImages?: string[], // can be modified to have captions
    categories?: CategorySchema[],
    qrCodeLink?: string,
    gstin?: string,
    shopSlug?: string,
}