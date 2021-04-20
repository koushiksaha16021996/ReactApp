import React, { Component, useState } from 'react';
import {BrowserRouter,Route, Redirect, Switch} from 'react-router-dom';
import ShowStudentsChild from './ShowStudentsChild'
import ShowStudent from './ShowStudent'
import Navbar from './Navbar'
import Home from './Home';
import ADDorEDIT from './ADDorEDIT'
import Forms from './Forms'
import Error from './Error';


const StudentDetailsParent=()=>{
    const [state,Setstate]=useState({
        persons:[
            {
                "regId" : "101",
                "FirstName": "Koushik",
                "LastName": "Saha",
                "age" : "12",
                "classs" : "6",
                "percent": 40,
                "Grades": ""
            },
            {
                "regId" : "102",
                "FirstName": "John",
                "LastName": "Doe",
                "age" : "11",
                "classs" : "12",
                "percent": 60,
                "Grades": ""
            },
            {
                "regId" : "103",
                "FirstName": "Rimpa",
                "LastName": "Paul",
                "age" : "12",
                "classs" : "10",
                "percent": 50,
                "Grades": ""
            },
            {
                "regId" : "104",
                "FirstName": "Tanmay",
                "LastName": "Rana",
                "age" : "12",
                "classs" : "5",
                "percent": 70,
                "Grades": ""
            },
            {
                "regId" : "105",
                "FirstName": "Sutirtha",
                "LastName": "Guha",
                "age" : "10",
                "classs" : "7",
                "percent": 20,
                "Grades": ""
            },
            {
                "regId" : "106",
                "FirstName": "Sumit",
                "LastName": "Ghosh",
                "age" : "12",
                "classs" : "9",
                "percent": 80,
                "Grades": ""
            },
            {
                "regId" : "107",
                "FirstName": "Purnendu",
                "LastName": "Nag",
                "age" : "12",
                "classs" : "9",
                "percent": 90,
                "Grades": ""
            },
            {
                "regId" : "108",
                "FirstName": "Priyam",
                "LastName": "Sinha",
                "age" : "12",
                "classs" : "9",
                "percent": 75,
                "Grades": ""
            },
            {
                "regId" : "109",
                "FirstName": "Krishnendu",
                "LastName": "Mandal",
                "age" : "12",
                "classs" : "9",
                "percent": 10,
                "Grades": ""
            },
            {
                "regId" : "110",
                "FirstName": "Soumo",
                "LastName": "Banerjee",
                "age" : "12",
                "classs" : "7",
                "percent": 9,
                "Grades": ""
            }]
    });
    const DeleteDetails=(id)=>{
        const persons=state.persons.filter(persons=>persons.regId!==id)
        Setstate({
            ...state,
            persons
        })
    }

    const AddorEditperson=(person)=>{
        console.log(person)
        const students=state.persons.filter(item=>item.regId!==person.regId)
        Setstate({
            ...state,
            persons:[...students,person]
        })
    }
    console.log(state.persons[0])
    return(
        <div>
            <BrowserRouter>
                <Navbar/>
                <div className="container">
                    <Switch>
                    <Route exact path="/" component={()=><Redirect to="/home"/>}/>
                        <Route path="/home" component={Home}/>
                        <Route path="/students" component={()=><ShowStudentsChild persons={state.persons}  DeleteDetails={DeleteDetails}/>}/>
                        <Route path="/student/:regId" component={(props)=><ShowStudent person={state.persons.find(person=>person.regId===props.match.params.regId)}/>}/>
                        <Route path="/edit/:regId" component={(props)=><ADDorEDIT AddorEditperson={AddorEditperson} person={state.persons.find(person=>person.regId===props.match.params.regId)}/>}/>
                        <Route path="/importdata" component={()=><ADDorEDIT AddorEditperson={AddorEditperson} person={
                            {
                                "regId" : "",
                                "FirstName": "",
                                "LastName": "",
                                "age" : "",
                                "classs" : "",
                                "percent": "",
                                "Grades": ""
                            }
                        }/>}/>
                        <Route path="/newform" component={()=><Forms/>}/>
                        <Route component={Error}/>
                    </Switch>
                </div>
            </BrowserRouter>

            {/*{<div className="container">     
                <div className="row">
                    <div className="col-md">
                        <ShowStudentsChild persons={this.state.persons} ShowDetails={this.ShowDetails} DeleteDetails={this.DeleteDetails}/>
                    </div>
                    <div className="col-md">
                        <ShowStudent person={person} />
                    </div>
                </div>
            </div>} */}
            
        </div>


    );
}   

export default StudentDetailsParent