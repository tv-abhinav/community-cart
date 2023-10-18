import { AddressSchema } from "./User";
import { ProductSchema } from "./Product";

export type StatusEnum = "packed" | "shipped" | "delivered"
export interface CreateOrderSchema {
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

export interface OrderSchema extends CreateOrderSchema {
    _id: string,
}

export interface UpdateOrderSchema {
    _id: string,
    status?: StatusEnum,
    isPaid?: boolean,
    shippingAddress?: AddressSchema,
    deliveredAt?: Date,
}
