import React, { Component} from 'react';
import { Link, Redirect } from 'react-router-dom';
class Demo extends Component{
    constructor(props){
        super(props);
        this.state={
            "regId" : ""
        }
        this.idref=React.createRef();
    }
    
    handleClick=(e)=>{
        e.preventDefault();
        this.setState({
            ...this.state,
            regId:this.idref.current.value
        });
        console.log(this.state.regId)
        this.props.AddorEditperson(this.idref.current.value)
        return <Redirect to="/show"/>
    }

   render(){
    return(
        <div>
            <form>
                    <div class="mb-3">
                      <label for="id" class="form-label">ID</label>
                      <input type="number" class="form-control"  aria-describedby="emailHelp" name="regId" ref={this.idref}/> 
                    </div>
                    <button onClick={this.handleClick}>Add</button>
            </form>
            <Link to="/show">show details</Link>
        </div>
    )
   }
}
export default Demo;