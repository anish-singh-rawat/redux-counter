import { DECREMENT, INCREMENT } from "../constant/counter.constant"

export const increment = () =>({
    type : INCREMENT,
    payload : ''
})


export const decrement = ()=>({
    type : DECREMENT,
    payload : ''
})