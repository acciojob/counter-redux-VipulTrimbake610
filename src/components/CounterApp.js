import React from "react";
import { useDispatch, useSelector } from "react-redux"
import { decrese, increse } from "../redux/actions/counterAction";


const CounterApp = ()=>{
    let dispatch = useDispatch();
    let count = useSelector(info=>info)
    // console.log(count);
    return (
        <>
        <h1>Count : {count}</h1>
        <button onClick={()=>dispatch(increse())}>Increment</button>
        <button onClick={()=>dispatch(decrese())}>Decrement</button>
        </>
    )
}

export default CounterApp;