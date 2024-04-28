import { createSlice } from "@reduxjs/toolkit"
const initialState={
    counter:0
};
const counterSlice=createSlice({
    name:"counter",
    initialState,
    reducers:{
        increment:(state,payload)=>{
state.counter+=1
        },
        decrement:(state,payload)=>{
            state.counter-=1
        }
    }
})
export const {increment,decrement}=counterSlice.actions
export default counterSlice