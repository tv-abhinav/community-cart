import { OrderSchema } from '@/model/Order';
import { createSlice } from '@reduxjs/toolkit'


interface Data {
    order: OrderSchema[];
}


const initialState: Data = {
    order: [],
}


export const OrderSlice = createSlice({
    name: 'Order',
    initialState,
    reducers: {
        setOrder: (state, action:{payload: OrderSchema[], type: string}) => {
            state.order =  action.payload
        },
    },
})

export const {setOrder  } = OrderSlice.actions

export const OrderReducer = OrderSlice.reducer;