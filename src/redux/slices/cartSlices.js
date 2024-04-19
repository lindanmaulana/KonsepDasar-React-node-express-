import { createSlice } from "@reduxjs/toolkit";

const cartSlices = createSlice({
  name: "cart",
  initialState: {
    data: [],
    userLogin: false,
  },
  reducers: {
    addToCart: (state, action) => {
      state.data.push(action.payload);
    },
    login: (status) => {
      status.userLogin = true;
    },
  },
});

export const { addToCart, login } = cartSlices.actions;
export default cartSlices.reducer;
