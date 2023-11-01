import { SellerSchema } from '@/model/Seller'
import { CustomerSchema } from '@/model/User'
import { createAction, createSlice } from '@reduxjs/toolkit'

interface CustomerState {
  CustomerData: CustomerSchema | null,
  categories: any[],
  nearbySellers: any[],
  isFetching: boolean
}

const initialState: CustomerState = {
  CustomerData: null,
  categories: [],
  nearbySellers: [],
  isFetching: false
}

export const CustomerSlice = createSlice({
  name: 'Customer',
  initialState,
  reducers: {
    setCustomerData: (state, action: { payload: CustomerSchema, type: string }) => {
      state.CustomerData = action.payload
    },
    setCategoriesForCustomer: (state, action) => {
      state.categories = action.payload
    },
    setNearbySellers: (state, action: { payload: SellerSchema[], type: string }) => {
      state.nearbySellers = action.payload
    },
    setIsFetchingCustomer: (state, action) => {
      state.nearbySellers = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCustomerData, setCategoriesForCustomer, setNearbySellers, setIsFetchingCustomer } = CustomerSlice.actions

export const CustomerReducer = CustomerSlice.reducer