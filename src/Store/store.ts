'use client'


import { AdminNavReducer } from '@/utils/AdminNavSlice';
import { ShopReducer } from '@/utils/ShopSlice';
import { UserReducer } from '@/utils/UserDataSlice';
import { CustomerReducer } from '@/utils/CustomerDataSlice';
import { configureStore } from '@reduxjs/toolkit'
import { cartReducer } from '@/utils/CartSlice';
import { bookmarkReducer } from '@/utils/Bookmark';
import { OrderReducer } from '@/utils/OrderSlice';



export const store = configureStore({
    reducer: {
        User : UserReducer,
        Customer : CustomerReducer,
        Shop : ShopReducer,
        AdminNav : AdminNavReducer,
        Cart : cartReducer,
        Bookmark : bookmarkReducer,
        Order : OrderReducer,
    },
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;