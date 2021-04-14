import React, {Component} from 'react';

class Forms extends Component{
    constructor(){
        super();
        this.state={
                "regId" : "",
                "FirstName": "",
                "LastName": "",
                "age" : "",
                "classs" : "",
                "percent": "",
        }
        this.idref=React.createRef()
        this.firstref=React.createRef()
        this.lastref=React.createRef()
        this.ageref=React.createRef()
        this.classref=React.createRef()
        this.percentref=React.createRef()
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.idref.current.value)
        this.setState({
            ...this.state,
            regId:this.idref.current.value,
            FirstName:this.firstref.current.value,
            LastName:this.lastref.current.value,
            age:this.ageref.current.value,
            classs:this.classref.current.value,
            percent:this.percentref.current.value
        })
    }
    render(){
        return(
            <div>
                <form>
                    <div class="mb-3">
                      <label for="id" class="form-label">ID</label>
                      <input type="number" class="form-control"  aria-describedby="emailHelp" name="regId" ref={this.idref}/>
                      
                    </div>


                    <div class="mb-3">
                      <label for="fname" class="form-label">First Name</label>
                      <input type="text" class="form-control" name="FirstName" ref={this.firstref}/>
                    </div>


                    <div class="mb-3">
                      <label for="lname" class="form-label">Last Name</label>
                      <input type="text" class="form-control" name="LastName" ref={this.lastref}/>
                    </div>


                    <div class="mb-3">
                      <label for="age" class="form-label">Age</label>
                      <input type="number" class="form-control" name="age" ref={this.ageref}/>
                    </div>

                    <div class="mb-3">
                      <label for="class" class="form-label">Class</label>
                      <input type="text" class="form-control" name="classs" ref={this.classref}/>
                    </div>

                    <div class="mb-3">
                      <label for="percent" class="form-label">Percentage</label>
                      <input type="number" class="form-control" name="percent" ref={this.percentref}/>
                    </div>

                    <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form>
                <br/>
                <div>
                    {this.state.regId? <div className="card mb-3">     
                        <div className="row g-0">
                            <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title">{this.state.FirstName} {this.state.LastName}</h5>
                                <p className="card-text">Age:{this.state.age}</p>
                                <p className="card-text">Class:{this.state.classs}</p>
                                <p className="card-text">Percentage:{this.state.percent}%</p>
                                </div>
                            </div>
                        </div>
                    </div>:<div>No details Available, Please add student to view the details</div>}
                </div>

            </div>
        )
    }
}
export default Forms;