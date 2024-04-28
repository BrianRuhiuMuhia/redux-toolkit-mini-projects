import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
const store=configureStore({reducer:counterSlice.reducer,initialState:counterSlice.initialState})
export default store;