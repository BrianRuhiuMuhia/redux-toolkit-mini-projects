import { configureStore } from "@reduxjs/toolkit";
import todoSlice from "./todo";
const initialState={
    todos:[]
}
const store=configureStore({reducer:todoSlice.reducer,initialState})
export default store