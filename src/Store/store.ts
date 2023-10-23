'use client'


import { AdminNavReducer } from '@/utils/resolvers/AdminNavSlice';
import { SellerReducer } from '@/utils/resolvers/SellerSlice';
import { UserReducer } from '@/utils/resolvers/UserDataSlice';
import { CustomerReducer } from '@/utils/resolvers/CustomerDataSlice';
import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from '@/utils/resolvers/CartSlice';
import { bookmarkReducer } from '@/utils/resolvers/Bookmark';
import { OrderReducer } from '@/utils/resolvers/OrderSlice';



export const store = configureStore({
    reducer: {
        User : UserReducer,
        Customer : CustomerReducer,
        Seller : SellerReducer,
        AdminNav : AdminNavReducer,
        Cart : cartReducer,
        Bookmark : bookmarkReducer,
        Order : OrderReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;