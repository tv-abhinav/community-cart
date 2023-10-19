import { createSlice } from '@reduxjs/toolkit'


interface Product {
    productName: string;
    productPrice: string;
    _id: string;
    productImage: string;
    productQuantity: number;
}

interface CartItem {
    _id: string;
    userID: string;
    product: Product;
}

interface Data {
    cart: CartItem[] | null;
    total: number;
}


const initialState: Data = {
    cart: null,
    total: 0,
}


export const cartSlice = createSlice({
    name: 'Cart',
    initialState,
    reducers: {
        setCart: (state, action:{payload: CartItem[], type:string}) => {
            state.cart =  action.payload
        },
        setTotalPrice: (state, action) => {
            state.total = action.payload
        }
    },
})

export const { setCart , setTotalPrice } = cartSlice.actions

export const cartReducer = cartSlice.reducer;