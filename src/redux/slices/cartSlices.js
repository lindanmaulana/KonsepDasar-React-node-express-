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
    dashboardItem: {
      students: []
    }
  },
  reducers: {
    register: (state, action) => {
      state.data.register.push(action.payload)
    },

    login: (state, action) => {
      state.data.login.push(action.payload)
    },
    dashboardStudents: (state, action) => {
      state.dashboardItem.students.push(action.payload)
    },
    addToCart: (state, action) => {
      state.data.cartItem.push(action.payload);
    },
  },
});

export const { addToCart, register, login, statusLogin, dashboardStudents } = cartSlices.actions;
export default cartSlices.reducer;
