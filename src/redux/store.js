import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cartSlices";

const store = configureStore({
    reducer: {cart: cartReducer}
})

console.log("Create Store: ", store.getState())

store.subscribe(() => {
    console.log("Update Store: ", store.getState())
})

export default store