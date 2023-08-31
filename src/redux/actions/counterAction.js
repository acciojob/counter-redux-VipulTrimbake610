

import { INCREMENT,DECREMENT } from "./actionTypes"

export const increse = (data)=>{
    return {
        type:INCREMENT,
        payload:data
    }
}

export const decrese = (data)=>{
    return {
        type:DECREMENT,
        payload:data
    }
}