import axios from "axios"
import { applyMiddleware, combineReducers, createStore } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"

//console.log("----redux----")
//const initialState = { counter: 0 }

//const counterReducer=(state=initialState,action)=>{
//    switch(action.type){
//        case "INCREMENT" : return{
//            counter : state.counter +action.payload
//        }
//        case "DECREMENT" : return{
//            counter : state.counter -action.payload
//        }
//        default : return state
//    }
//}
const todoReducer=(state={
   todo: []
},action)=>{
    switch(action.type){
        case "SHOW": return {todo: action.payload}
        default : return state
    }
}
//const rootReducer=combineReducers({
//    count: counterReducer,
//    todos: todoReducer})
export const store=createStore(todoReducer , composeWithDevTools(applyMiddleware(thunk)))

export const getTodos=(payloads)=>{
    return{
        type: "SHOW",
        payload: payloads
    }
}

export const showTodos=()=>{
    return(dispatch)=>{
        axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
            dispatch(getTodos(res.data))
            console.log(res.data)
        })
        
    }
}

//store.dispatch(showTodos())

//console.log(store.getState())
//const increment={
//    type:"INCREMENT"
//}
//const decrement={
//    type:"DECREMENT"
//}
//store.dispatch(increment)
//console.log(store.getState())
//store.dispatch(decrement)
//console.log(store.getState(),"initial state")
//store.subscribe(()=>console.log(store.getState()))
//const INCREMENT="INCREMENT"
//const DECREMENT="DECREMENT"
//export const doIncrement=(value)=>{
//    return{
//        type: INCREMENT,
//        payload: value
//    }
//}
//
//export const doDecrement=(value)=>{
//    return{
//        type: DECREMENT,
//        payload: value
//    }
//}

//store.dispatch(doIncrement(1))
//store.dispatch(doIncrement(10))
//store.dispatch(doDecrement(5))
//store.dispatch(doIncrement(1))
//store.dispatch(doIncrement(10))
//store.dispatch(doDecrement(5))
//store.dispatch(doIncrement(1))
//store.dispatch(doIncrement(1))
//store.dispatch(doDecrement(1))

