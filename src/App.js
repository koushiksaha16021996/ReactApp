import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {doIncrement, doDecrement} from './Redux'


const App =()=>{
  const state=useSelector((state)=>state)
  const {counter} = state
  const usedispatch=useDispatch();
  return(
    <div>
      <h1>Counter: {counter}</h1>
      <button onClick={()=>usedispatch(doIncrement(1))}>Increment</button>
      <button onClick={()=>usedispatch(doDecrement(1))}>Decrement</button>
    </div>
  )
}
export  default App;



