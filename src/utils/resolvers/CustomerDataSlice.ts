import { CustomerSchema } from '@/model/User'
import { createSlice } from '@reduxjs/toolkit'

interface CustomerState {
  CustomerData: CustomerSchema | null,
  categories : any[],
}

const initialState: CustomerState = {
  CustomerData: null,
  categories: []
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
  },
})

// Action creators are generated for each case reducer function
export const { setCustomerData, setCategoriesForCustomer } = CustomerSlice.actions

export const CustomerReducer = CustomerSlice.reducer