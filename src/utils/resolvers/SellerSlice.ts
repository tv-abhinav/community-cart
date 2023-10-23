import { SellerSchema } from '@/model/Seller'
import { createSlice } from '@reduxjs/toolkit'

interface SellerState {
    seller: SellerSchema | null,
    catLoading : boolean,
    productLoading : boolean,
    product : any[],
    categories : any[],
    Order : any[],
    orderLoading : boolean,
    sellerLoading : boolean,
}

const initialState : SellerState = {
    seller: null,
    catLoading : false,
    productLoading : false,
    product : [],
    categories : [],
    Order : [],
    orderLoading : false,
    sellerLoading : false,
}

export const Seller = createSlice({
  name: 'SellerData',
  initialState,
  reducers: {
    setSellerData : (state, action) => {
        state.seller = action.payload
    },
    setSellerLoading : (state , action) => {
      state.sellerLoading = action.payload
    },
    setProductData : (state, action) => {
        state.product = action.payload
    },
    setCatLoading : (state , action) => {
      state.catLoading = action.payload
    },
    setProdLoading : (state , action) => {
      state.productLoading = action.payload
    },
    setOrderData : (state , action) => {
      state.Order = action.payload
    },
    setOrderLoading : (state , action) => {
      state.orderLoading = action.payload
    },
    setCategoriesForSeller: (state, action) => {
      state.categories = action.payload
    },

  },
})

// Action creators are generated for each case reducer function
export const { setSellerData, setSellerLoading, setCatLoading , setProdLoading  , setProductData , setOrderData , setOrderLoading, setCategoriesForSeller} = Seller.actions

export const SellerReducer =  Seller.reducer