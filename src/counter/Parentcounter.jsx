
import React, { Component } from 'react'
import Childcounter from './Childcounter'

class Parentcounter extends Component{
    constructor(){
        super();
        this.state={
            counter:0,
        }; 
        this.counter=0;
        this.name="koushik";
    }
    
    incrementplus=()=>{
        console.log("ok done")
       this.setState({
           counter:this.state.counter+1, 
       });
   };
    decrementminus=()=>{
       this.setState({
           counter:this.state.counter-1,
       });
   };
   render(){
       return(
           <Childcounter name={this.name} counter={this.state.counter} increase={this.incrementplus} decrease={this.decrementminus}/>
       )
   }
}
export default Parentcounter;