import React, { Component } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {doIncrement, doDecrement} from './Redux'
import Apps from './Apps'
import { Provider } from 'react-redux';
import {store} from './Reduxtoolkit'

const App =()=>{
  const state=useSelector((state)=>state)
  const {counter} = state
  const usedispatch=useDispatch();
  return(
    <div className="container">
      <fieldset className="my-fields">
        <legend>Using Redux</legend>
        <h1>Counter: {counter}</h1>
        <button onClick={()=>usedispatch(doIncrement(1))}>Increment</button>
        <button onClick={()=>usedispatch(doDecrement(1))}>Decrement</button>
      </fieldset>
      <Provider store={store}>
        <Apps/>
      </Provider>

    </div>
  )
}
export  default App;



