import React, { useEffect, useState } from 'react'


const Childcounter=(props)=>{
    const {name,counter,increase,decrease}=props;
    return(
        <div>
        <h1>{name}</h1>
        <br/>
        <button onClick={increase}>incrase</button>
        <h1>Counter: {counter}</h1>
        <button onClick={decrease}>decrease</button>
        
    </div>
    )
}
export default Childcounter;