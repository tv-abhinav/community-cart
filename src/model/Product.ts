export interface ProductHighLevelFeatures {
  productName: string;
  productPrice: number;
  productQuantity: number;
}
export interface CreateProductSchema extends ProductHighLevelFeatures {
  productDescription: string;
  productSlug: string;
  productFeatured: boolean;
  categoryId: string;
  sellerId: string;
}

export interface ProductSchema extends CreateProductSchema {
  productId: string;
  productImageUrl?: string;
}

export interface UpdateProductSchema {
  _id: string;
  productName?: string;
  productDescription?: string;
  productImage?: string;
  productSlug?: string;
  productPrice?: number;
  productQuantity?: number;
  productFeatured?: boolean;
  categoryId?: string;
  sellerId?: string;
}
