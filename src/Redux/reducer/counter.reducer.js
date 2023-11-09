import { DECREMENT, INCREMENT } from "../constant/counter.constant";

const initialState = {
    counter : 1
}

const CounterReducer = (state = initialState, action)=>{
    switch(action.type) {
        case  INCREMENT : 
        return{
            ...state,
            counter :  state.counter + 1
        }

        case  DECREMENT : 
            if (state.counter == 0) {
                return { ...state,
                counter :  0
                }
            }
            else{
                return {
                    ...state,
                    counter :  state.counter - 1
                }
            }
        

        default: return state;
    }
}

export default CounterReducer;