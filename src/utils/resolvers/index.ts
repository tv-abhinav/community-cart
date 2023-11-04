import { UserReducer } from './UserDataSlice'
import { AdminNavReducer } from './AdminNavSlice'
import { bookmarkReducer } from './Bookmark'
import { cartReducer } from './CartSlice'
import { CustomerReducer } from './CustomerDataSlice'
import { OrderReducer } from './OrderSlice'
import { SellerReducer } from './SellerSlice'
import { combineReducers } from '@reduxjs/toolkit'

export const RESET_ACTION = {
  type:"RESET_STORE"
}

const appReducer = combineReducers({
  User: UserReducer,
  AdminNav: AdminNavReducer,
  Bookmark: bookmarkReducer,
  Cart: cartReducer,
  Customer: CustomerReducer,
  Order: OrderReducer,
  Seller: SellerReducer,
})

export const rootReducer = (state: any, action: any) => {
  if (action === RESET_ACTION) {
    return appReducer(undefined, action)
  }
  return appReducer(state, action)
}