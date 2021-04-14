import React from 'react';
import { Link } from 'react-router-dom';
const ShowStudentsChild=(props)=>{
    const {persons,ShowDetails,DeleteDetails}=props;
    persons.sort((a,b)=>{
        return a.regId-b.regId;
    })
    const showR=persons.map(p=>
    <tr key={p.regId}>
        <td>{p.regId}</td>
        <td>{p.FirstName}</td>
        <td>{p.LastName}</td>
        <td>{p.age}</td>
        <td>{p.classs}th</td>
        <td>{p.percent}%</td>
        <td>{p.percent>90 && p.percent<=100 ? p.Grades='O':
            p.percent>80 && p.percent<=90 ? p.Grades='E':
            p.percent>70 && p.percent<=80 ? p.Grades='A':
            p.percent>60 && p.percent<=70 ? p.Grades='B':
            p.percent>50 && p.percent<=60 ? p.Grades='C':
            p.percent>40 && p.percent<=50 ? p.Grades='D':p.Grades='Fail'}</td>
       {/* <td><button className="btn" onClick={()=>ShowDetails(p.regId)}>Show Details</button></td>*/}
       <td><Link to={`/student/${p?.regId}`}>View Details</Link></td>
       <td><Link to={`/edit/${p?.regId}`}>Edit Details</Link></td>
        <td><button className="btn" onClick={()=>DeleteDetails(p.regId)}>Delete</button></td>    
    </tr>);
     
    return(
        <div>
            <table className="table table-bordered border-primary">
                <tr>
                    <th>RegID</th>
                    <th>First Name</th>
                    <th>Second Name</th>
                    <th>Age</th>
                    <th>Class</th>
                    <th>Percent</th>
                    <th>Grade</th>
                    <th>Show Details</th>
                    <th>Edit Details</th>
                    <th>Delete User</th>
                </tr>
                {showR}
            </table>
            <button className="btn btn-dark pmd-btn-fab pmd-ripple-effect pmd-btn-raised" type="button"><Link to="/importdata">Add</Link></button>
        </div>
        
    );
}
export default ShowStudentsChild;