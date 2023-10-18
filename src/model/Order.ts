import { AddressSchema } from "./User";
import { ProductSchema } from "./Product";

enum StatusEnum {
    packed,
    shipped,
    delivered
}

export interface OrderSchema {
    customerID: string,
    shopID: string,
    orderItems: [
        {
            qty: number,
            product: ProductSchema,

        }
    ],
    shippingAddress: AddressSchema,
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
    status: StatusEnum, // default: false
    deliveredAt: Date,
}