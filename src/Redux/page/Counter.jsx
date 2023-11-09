import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../action/counter.action';

export default function Counter() {
    let store = useSelector(state => state)
    console.log(store);
    const dispatch = useDispatch()
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col mt-5">
                        <div className="counter mt-3 ">
                            <h2>
                                Counter : {store.counter}
                            </h2>
                        </div>
                        <div className="d-felx mt-5">

                            <div className="increment-btn btn btn-primary mx-5" onClick={()=>dispatch(increment())}>
                                 Increment +
                            </div>

                            <div className="decrement-btn btn btn-primary mx-5"  onClick={()=>dispatch(decrement())}> 
                            Decrement -
                           </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
