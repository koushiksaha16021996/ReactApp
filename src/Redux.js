import { createStore } from "redux"

console.log("----redux----")
const initialState = { counter: 0 }

const reducer=(state=initialState,action)=>{
    switch(action.type){
        case "INCREMENT" : return{
            counter : state.counter +action.payload
        }
        case "DECREMENT" : return{
            counter : state.counter -action.payload
        }
        default : return state
    }
}

export const store=createStore(reducer)
//console.log(store.getState())
const increment={
    type:"INCREMENT"
}
const decrement={
    type:"DECREMENT"
}
//store.dispatch(increment)
//console.log(store.getState())
//store.dispatch(decrement)
console.log(store.getState(),"initial state")
store.subscribe(()=>console.log(store.getState()))
const INCREMENT="INCREMENT"
const DECREMENT="DECREMENT"
export const doIncrement=(value)=>{
    return{
        type: INCREMENT,
        payload: value
    }
}

export const doDecrement=(value)=>{
    return{
        type: DECREMENT,
        payload: value
    }
}

//store.dispatch(doIncrement(1))
//store.dispatch(doIncrement(10))
//store.dispatch(doDecrement(5))
//store.dispatch(doIncrement(1))
//store.dispatch(doIncrement(10))
//store.dispatch(doDecrement(5))
//store.dispatch(doIncrement(1))
//store.dispatch(doIncrement(1))
//store.dispatch(doDecrement(1))

