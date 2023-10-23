export interface CreateCategorySchema {
    categoryName: string;
    categoryDescription: string;
    categorySlug: string;
    catIconUrl: string;
}

export interface CategorySchema extends CreateCategorySchema {
    categoryId: string;
}

export interface UpdateCategorySchema {
    _id: string;
    categoryName?: string;
    categoryDescription?: string;
    catIconUrl?: string;
    categorySlug?: string;
}