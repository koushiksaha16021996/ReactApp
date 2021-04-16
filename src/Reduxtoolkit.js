import {createSlice, configureStore} from '@reduxjs/toolkit'

const counterSlice= createSlice({
    name: "counter",
    initialState: {
        value: 0
    },
    reducers:{
        doIncrement: state=>{
           state.value = state.value+1
        },
        doDecrement: state=>{
            state.value = state.value-1
        }
    }
})

const { doIncrement, doDecrement } = counterSlice.actions;

const store=configureStore({
    reducer: counterSlice.reducer
})
console.log(store.getState())
store.subscribe(()=>console.log(store.getState()))

store.dispatch(doIncrement())
store.dispatch(doDecrement())
store.dispatch(doIncrement())

