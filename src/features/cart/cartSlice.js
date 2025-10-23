import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: [],
  totalQuantity: 0,
  totalPrice: 0,
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const existing = state.items.find(i => i.id === action.payload.id)
      if (!existing) {
        state.items.push({ ...action.payload, quantity: 1 })
        state.totalQuantity++
        state.totalPrice += action.payload.price
      }
    },
    increase: (state, action) => {
      const item = state.items.find(i => i.id === action.payload)
      if (item) {
        item.quantity++
        state.totalQuantity++
        state.totalPrice += item.price
      }
    },
    decrease: (state, action) => {
      const item = state.items.find(i => i.id === action.payload)
      if (item && item.quantity > 1) {
        item.quantity--
        state.totalQuantity--
        state.totalPrice -= item.price
      }
    },
    deleteItem: (state, action) => {
      const item = state.items.find(i => i.id === action.payload)
      if (item) {
        state.totalQuantity -= item.quantity
        state.totalPrice -= item.price * item.quantity
        state.items = state.items.filter(i => i.id !== action.payload)
      }
    },
  },
})

export const { addItem, increase, decrease, deleteItem } = cartSlice.actions
export default cartSlice.reducer
