import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todos:[]
}
const todoSlice=createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            state.todos.push(action.payload)
        },
        deleteTodo:(state,action)=>{
            state.todos=state.todos.filter((item)=>item.id!==action.payload)
        },
        updateTodo:(state,action)=>{
            let item=state.todos.find((item)=>item.id===action.payload)
            console.log(item.id)
            item.completed=!item.completed
        }
    }
})
export const {addTodo,deleteTodo,updateTodo}=todoSlice.actions
export default todoSlice