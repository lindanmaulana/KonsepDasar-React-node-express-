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
    dashboard: {
      students: [],
      sideBar: false,
      headerBar: false
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
      state.dashboard.students.push(action.payload)
    },
    dashboardSideBar: (state, action) => {
      state.dashboard.sideBar = action.payload
    },
    dashboardHeader: (state, action) => {
      state.dashboard.headerBar = action.payload
    },
    addToCart: (state, action) => {
      state.data.cartItem.push(action.payload);
    },
  },
});

export const { addToCart, register, login, statusLogin, dashboardStudents, dashboardSideBar, dashboardHeader } = cartSlices.actions;
export default cartSlices.reducer;
