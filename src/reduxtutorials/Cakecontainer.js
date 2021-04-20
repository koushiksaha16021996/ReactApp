import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {buycake} from '../redux/cakes/Cakeaction'
export function Cakecontainer(){
    const state = useSelector((state)=>state)
    const dispatch=useDispatch()

    const {noOfcake} = state 
    return(
        <div>
            <h1>no of cakes={noOfcake}</h1>
            <button onClick={()=>dispatch(buycake())}>buy</button>
        </div>
    )
}
