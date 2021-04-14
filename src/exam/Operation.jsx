import axios from 'axios';
import React, { Component } from 'react'
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import List from './List'
import Viewde from './Viewde'
import Newform from './Newform'
import Nav from './Nav';
import Home from './Home';
import Error from './Error'

class Operation extends Component{
    constructor(){
        super();
        this.state={
            todos:[]
        }
    }
    componentDidMount(){
        axios.get("https://jsonplaceholder.typicode.com/todos/").then(res=>{
           
            this.setState({
                ...this.state,
                todos: res.data
            })
        })
    }
    addoredit=(item)=>{
        const items=this.state.todos.filter(items=>items.id!=item.id)
        this.setState({
            ...this.state,
            todos:[...items,item]
        })
    }
    render(){
        console.log(this.state)
        return(

            <BrowserRouter>
                <Nav/>
                <Switch>
                <Route exact path="/" component={()=><Redirect to="/home"/>}/>
                <Route path="/home" component={()=><Home/>}/>
                <Route path="/allList" component={()=><List todos={this.state.todos}/>}/>
                <Route path="/product/:id" component={(props)=><Viewde item={props.match.params.id}/>}/>
                <Route path="/add" component={()=><Newform addoredit={this.addoredit} Item={
                    {
                        "id": "",
                        "title": ""
                    }
                }/>}/>
                <Route path="/edit/:id" component={(props)=><Newform addoredit={this.addoredit} Item={this.state.todos.find(list=>list?.id==props.match.params.id)}/>}/>
                <Route component={()=><Error/>}/>
                </Switch>
            </BrowserRouter>
        )
    }
}
export default Operation