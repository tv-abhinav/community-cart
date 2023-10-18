export interface CreateCategorySchema {
    categoryName: string;
    categoryDescription: string;
    categoryImage: string;
    categorySlug: string;
}

export interface CategorySchema extends CreateCategorySchema {
    _id: string;
    createdAt: string;
    updatedAt: string;
}

export interface UpdateCategorySchema {
    _id: string;
    categoryName?: string;
    categoryDescription?: string;
    categoryImage?: string;
    categorySlug?: string;
}