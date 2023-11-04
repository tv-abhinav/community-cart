import { ProductSchema } from '@/model/Product'
import { SellerSchema } from '@/model/Seller'
import { createAction, createSlice } from '@reduxjs/toolkit'

interface SellerState {
  seller: SellerSchema | null,
  currentCatId: number,
  currentShopId: number,
  product: { [id: string]: ProductSchema },
  categories: any[],
  allCategories: any[],
  Order: any[],
  isFetching: boolean,
}

const initialState: SellerState = {
  seller: null,
  currentCatId: -1,
  currentShopId: -1,
  product: {},
  categories: [],
  allCategories: [],
  Order: [],
  isFetching: false,
}

export const Seller = createSlice({
  name: 'SellerData',
  initialState,
  reducers: {
    setSellerData: (state, action) => {
      state.seller = action.payload
    },
    setProductData: (state, action: { type: string, payload: ProductSchema[] }) => {
      action.payload.forEach(prod => {
        state.product[prod.productId] = prod
      })
    },
    setCurrentCatId: (state, action) => {
      state.currentCatId = action.payload
    },
    setCurrentShopId: (state, action) => {
      state.currentShopId = action.payload
    },
    setOrderData: (state, action) => {
      state.Order = action.payload
    },
    setCategoriesForSeller: (state, action) => {
      state.categories = action.payload
    },
    setAllCategories: (state, action) => {
      state.allCategories = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { setSellerData, setCurrentCatId, setProductData, setOrderData, setCategoriesForSeller, setAllCategories } = Seller.actions

export const SellerReducer = Seller.reducer