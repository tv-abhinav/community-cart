export interface OrderSchema {
    user: string,
    orderItems: [
        {
            qty: number,
            product: string,

        }
    ],
    shippingAddress: {
        fullName: string,
        address: string,
        city: string,
        postalCode: number,
        country: string,
    },
    paymentMethod: string, // default : "Paypal"
    paymentResult: {
        id: string,
        status: string,
        update_time: string,
        email_address: string,
    },
    itemsPrice: number,
    shippingPrice: number,
    taxPrice: number,
    totalPrice: number,
    isPaid: boolean, // default: false
    paidAt?: Date,
    isDelivered: boolean, // default: false
    deliveredAt: Date,
}