import {createSlice, configureStore} from '@reduxjs/toolkit'

const counterSlice= createSlice({
    name: "counter",
    initialState: {
        counter: 0
    },
    reducers:{
        doIncrement: state=>{
           state.counter = state.counter+1
        },
        doDecrement: state=>{
            state.counter = state.counter-1
        }
    }
})

export const { doIncrement, doDecrement } = counterSlice.actions;

export const store=configureStore({
    reducer: counterSlice.reducer
})
console.log(store.getState())
store.subscribe(()=>console.log(store.getState()))

//store.dispatch(doIncrement())
//store.dispatch(doDecrement())
//store.dispatch(doIncrement())

