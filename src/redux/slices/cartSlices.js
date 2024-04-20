import { createSlice } from "@reduxjs/toolkit";

const cartSlices = createSlice({
  name: "cart",
  initialState: {
    data: {
      register: [],
      cartItem: []
    },
    userLogin: false,
  },
  reducers: {
    register: (state, action) => {
      state.data.register.push(action.payload)
    },
    login: (status) => {
      status.userLogin = true;
    },
    addToCart: (state, action) => {
      state.data.cartItem.push(action.payload);
    },
  },
});

export const { addToCart, login, register } = cartSlices.actions;
export default cartSlices.reducer;
