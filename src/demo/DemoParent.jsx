import React, { Component } from 'react';
import { BrowserRouter, Route ,Redirect} from 'react-router-dom';
import Demo from './Demo'
import Show from './Show' 
class DemoParent extends Component{
    constructor(){
        super();
        this.state={
            regid:""
        }
    }
    AddorEditperson=(id)=>{
        this.setState({
            ...this.state,
            regid:id
        })
    }
    render(){
        console.log(this.state.regid,"from parent")
        return(
            <BrowserRouter>
                <Route exact path="/" component={()=><Redirect to="/home"/>}/>
                <Route path="/home" component={()=><Demo AddorEditperson={this.AddorEditperson}/>}/>
                <Route path="/show" component={()=><Show state={this.state.regid}/>}/>
            </BrowserRouter>
        )
    }
}
export default DemoParent;