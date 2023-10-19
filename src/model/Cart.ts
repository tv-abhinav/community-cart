export interface CartSchema {
    customerID: string,
    productID: string,
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
    userID: "",
    _id: string,
    quantity: number,
}