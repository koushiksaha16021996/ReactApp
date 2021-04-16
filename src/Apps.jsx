import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {doIncrement, doDecrement} from './Reduxtoolkit'


const Apps=()=>{
    const state=useSelector((state)=>state)
    const {counter} = state
    const usedispatch=useDispatch();
    return(
        <div className="container">
        <fieldset className="my-fields">
          <legend>Using Reduxtoolkit</legend>
          <h1>Counter: {counter}</h1>
          <button onClick={()=>usedispatch(doIncrement())}>Increment</button>
          <button onClick={()=>usedispatch(doDecrement())}>Decrement</button>
        </fieldset>
      </div>
    )
}
export default Apps;