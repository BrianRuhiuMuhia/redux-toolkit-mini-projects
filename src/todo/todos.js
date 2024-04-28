import React from "react";
import { useDispatch,useSelector } from "react-redux";
import {addTodo,deleteTodo,updateTodo} from "./store/todo"
import { useRef } from "react";
export default function ToDo()
{
    const dispatch=useDispatch();
    const items=useSelector((state)=>state.todos);
    const inputRef=useRef();
    const completed={textDecoration:"linethrough"}
    return(
        <div>
            <input ref={inputRef}></input>
<button onClick={()=>{
  dispatch(addTodo({title:inputRef.current.value,id:Math.random(),completed:false}))
}}>Add</button>
{
  items.map((item)=>{
return <div key={item["id"]} style={item.completed? completed : {}}><span>{item.title}</span><input type="checkbox" onClick={()=>{
  dispatch(updateTodo(item.id))
}} checked={item.completed}></input><button onClick={()=>{
  dispatch(deleteTodo(item.id))
}}>delete</button></div>
  })
}  
        </div>
    )
}