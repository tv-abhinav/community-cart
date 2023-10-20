import { CustomerSchema } from '@/model/User'
import { createSlice } from '@reduxjs/toolkit'

interface CustomerState {
    CustomerData:  CustomerSchema | null,
}

const initialState : CustomerState = {
    CustomerData:  null,
}

export const CustomerSlice = createSlice({
  name: 'Customer',
  initialState,
  reducers: {
    setCustomerData : (state, action:{payload: CustomerSchema, type: string}) => {
        state.CustomerData = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setCustomerData } = CustomerSlice.actions

export const CustomerReducer =  CustomerSlice.reducer