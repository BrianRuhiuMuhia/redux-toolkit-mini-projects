import { increment,decrement } from "./store/counterSlice"
import { useDispatch,useSelector } from "react-redux"
export default function Counter()
{
    const dispatch=useDispatch()
    const count=useSelector((state)=>state.counter)
    return (
        <div>
<span>{count}</span>
<button onClick={()=>dispatch(increment())}>+</button>
<button onClick={()=>dispatch(decrement())}>-</button>
        </div>
    )
}