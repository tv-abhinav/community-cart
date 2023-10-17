import { UserSchema } from "./User";
import { ProductSchema } from "./Product";

export interface OrderSchema {
    user: UserSchema,
    orderItems: [
        {
            qty: number,
            product: ProductSchema,

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