import React, { Component } from 'react';
class Show extends Component{
    constructor(props){
        super(props);

    }
    
    render(){
        console.log(this.props.state)
        return(
            <div>
                {this.props.state}
            </div>
        )
    }
}
export default Show;