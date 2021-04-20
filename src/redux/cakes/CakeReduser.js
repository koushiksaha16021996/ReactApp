import {BUY_CAKE} from './CakeType'
const initialState={
    noOfcake:10
}

const cakeReduser=(state=initialState,action)=>{
    switch(action.type){
        case BUY_CAKE: return{
            ...state,
            noOfcake:state.noOfcake-1
        }
        default : return state
    }
}

export default cakeReduser