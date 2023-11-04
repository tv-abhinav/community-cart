import { CartViewSchema } from '@/model/Cart';
import { createAction, createSlice } from '@reduxjs/toolkit'

interface Data {
    cart: CartViewSchema | null;
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
        setCart: (state, action: { payload: CartViewSchema, type: string }) => {
            state.cart = action.payload
        },
        setTotalPrice: (state, action) => {
            state.total = action.payload
        }
    },
})

export const { setCart, setTotalPrice } = cartSlice.actions

export const cartReducer = cartSlice.reducer;