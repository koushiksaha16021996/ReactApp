import axios from 'axios';
import React, { Component } from 'react'
class Todos extends Component{
    constructor(){
        super();
        this.state={
            todos:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos").then(res=>{
            this.setState({
                ...this.state,
                todos:res.data
            })
        })
    }
    render(){
        console.log(this.state.todos,"hi")
        return(
            <div>
                <table>
                    {this.state.todos.map(p=><tr>
                        <td>{p.userId}</td>
                        <td>{p.id}</td>
                        <td>{p.title}</td>
                        <td>{p.completed?"true":"false"}</td>
                    </tr>)}
                </table>
            </div>
        )
    }
}
export default Todos;