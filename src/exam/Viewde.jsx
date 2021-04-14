import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Viewde=(props)=>{
    const [todo,settodo]=useState()
    const {item}=props;
    console.log(item)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/todos/${item}`).then(res=>{
            settodo(res.data)
        })
    },[])
    return(
        
        <div>
            <h1>id: {todo?.id}</h1>
            <br/>
            <h1>title: {todo?.title}</h1>
        </div>

    )
}
export default Viewde