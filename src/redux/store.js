import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./slices/cartSlices";

const store = configureStore({
    reducer: {cart: cartSlice}
})

console.log("Create Store: ", store.getState())

store.subscribe(() => {
    console.log("Update Store: ", store.getState())
})

export default store