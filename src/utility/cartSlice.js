import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartItem: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.cartItem.push(action.payload);
    },
    removeItem: (state, action) => {
      state.cartItem.pop();
    },
    clearCart: (state) => {
      state.cartItem.length = 0;
    },
  },
});

export const { addItem, removeItem, clearCart } = cartSlice.actions;

export default cartSlice.reducer;
