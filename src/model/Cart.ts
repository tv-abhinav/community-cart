export interface CartSchema {
    customerId: string,
    productId: string,
    quantity: number,
}

export interface CartViewSchema {
    product: {
        _id: string,
        productName: string,
        productPrice: number,
        productImage: string,
        productQuantity: number,
    }
    userId: "",
    _id: string,
    quantity: number,
}