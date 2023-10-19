export interface ProductHighLevelFeatures {
  productName: string;
  productPrice: number;
  productImage: string;
  productQuantity: number;
}
export interface CreateProductSchema extends ProductHighLevelFeatures {
  productDescription: string;
  productSlug: string;
  productFeatured: boolean;
  categoryID: string;
  shopID: string;
}

export interface ProductSchema extends ProductHighLevelFeatures {
  _id: string;
  productDescription: string;
  productSlug: string;
  productFeatured: boolean;
  productCategory: {
    _id: string,
    categoryName: string,
  };
  shopID: string;
  createdAt: string;
  updatedAt: string;
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
  categoryID?: string;
  shopID?: string;
}
