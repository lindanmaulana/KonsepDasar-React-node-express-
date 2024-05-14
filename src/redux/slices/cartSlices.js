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
      amount: {
        classes: 0,
        students: 0,
        college_lesson: 0
      },
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
    amountClasses: (state, action) => {
      state.dashboard.amount.classes = action.payload
    },
    amountStudents: (state, action) => {
      state.dashboard.amount.students = action.payload
    },
    amountCollegeLesson: (state, action) => {
      state.dashboard.amount.college_lesson = action.payload
    },
    addToCart: (state, action) => {
      state.data.cartItem.push(action.payload);
    },
  },
});

export const { addToCart, register, login, statusLogin, dashboardStudents, dashboardSideBar, dashboardHeader, amountClasses, amountStudents, amountCollegeLesson } = cartSlices.actions;
export default cartSlices.reducer;
