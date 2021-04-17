import React, { Component, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {doIncrement, doDecrement} from './Redux'
import Apps from './Apps'
import { Provider } from 'react-redux';
import {showTodos} from './Redux'


const App =()=>{
  const state=useSelector((state)=>state)
  
  const usedispatch=useDispatch();
  useEffect(()=>{
    usedispatch(showTodos());
  },[])
 // const counter=state.count.counter
  const {todo} = state;
  console.log(todo,"app.js")
  
  return(
    //<div className="container">
    //  <fieldset className="my-fields">
    //    <legend>Using Redux</legend>
    //    <h1>Counter: {counter}</h1>
    //    <button onClick={()=>usedispatch(doIncrement(1))}>Increment</button>
    //    <button onClick={()=>usedispatch(doDecrement(1))}>Decrement</button>
    //  </fieldset>
    //  
    //  <div>
    //    {todo.map(item=><div>
    //      <h1>{item.id}</h1>
    //      <h1>{item.title}</h1>
    //    </div>)}
    //  </div>
    //</div>
    <div>
      <table className="table">
        <thead>
          <tr>
            <td>UserId</td>
            <td>Id</td>
            <td>Title</td>
          </tr>
        </thead>
        <tbody>
          {todo?.map(item=>{
            return(
              <tr>
                <td>{item?.userId}</td>
                <td>{item?.id}</td>
                <td>{item?.title}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}
export  default App;



