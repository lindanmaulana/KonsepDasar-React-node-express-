import { createSlice } from "@reduxjs/toolkit";

const cartSlices = createSlice({
  name: "cart",
  initialState: {
    data: {
      register: [],
      login: [],
      cartItem: [],
    },
    userLogin: false,
  },
  reducers: {
    register: (state, action) => {
      state.data.register.push(action.payload)
    },

    login: (state, action) => {
      state.data.login.push(action.payload)
    },

    statusLogin: (status) => {
      status.userLogin = true;
    },

    addToCart: (state, action) => {
      state.data.cartItem.push(action.payload);
    },
  },
});

export const { addToCart, register, login, statusLogin } = cartSlices.actions;
export default cartSlices.reducer;
