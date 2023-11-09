import { createStore } from 'redux'
import CounterReducer from '../reducer/counter.reducer' 

let store = createStore(CounterReducer)

export default store;