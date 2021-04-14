import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import './Newform.css';

const Newform=(props)=>{
    
    const [item,setItem]=useState(props.Item)
    const handleClick=(e)=>{
        const {name,value}=e.target;
        setItem({
            ...item,
            [name]:value
        })
    }
    const handleSubmit=()=>{
        props.addoredit(item)
    }
    return(
        <div className="cotainer">
            <form>
                    <div class="mb-3">
                      <label for="id" class="form-label">ID</label>
                      <input type="number" class="form-control"  aria-describedby="emailHelp" name="id" value={item.id} onChange={handleClick}/>
                      
                    </div>


                    <div class="mb-3">
                      <label for="fname" class="form-label">First Name</label>
                      <input type="text" class="form-control" name="title" value={item.title} onChange={handleClick}/>
                    </div>

                    <button type="button" className="btn"  onClick={handleSubmit}><Link to="/allList" className="link">Submit</Link></button>
            </form>
        </div>
    )
}
export default Newform;