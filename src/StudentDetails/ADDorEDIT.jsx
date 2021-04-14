import React,{Component} from 'react';
class ADDorEDIT extends Component{
    constructor(props){
        super(props);
        this.state={
        //    student:{
        //        regId:"",
        //        FirstName:"",
        //        LastName:"",
        //        age:"",
        //        classs:"",
        //        percent:""
        //},
        student:this.props.person,
        validation:""
        }
           
    }
    handleClick=(e)=>{
        
        const {name,value}=e.target;
        this.setState({
            ...this.state,
            student:{
                ...this.state.student,
                [name]:value,
            }

        })
        console.log("clicked",e.target.name,e.target.value)
        console.log(this.state)
    }
    handleSubmit=()=>{
        const {regId,FirstName,LastName,age,classs,percent}=this.state.student;
        if(regId && FirstName && LastName && age && classs && percent){
            this.setState({
                ...this.state,
                validation:""
            })
            this.props.AddorEditperson(this.state.student)
        }
        else{
            this.setState({
                ...this.state,
                validation:"please fillup all mandatory item"
            })
        }
    }
    render(){
        return(
            <div className="container">
                <div>{this.state.validation}</div>
                <form>
                    <div class="mb-3">
                      <label for="id" class="form-label">ID</label>
                      <input type="number" class="form-control"  aria-describedby="emailHelp" name="regId" value={this.state.student.regId} onChange={this.handleClick}/>
                      
                    </div>


                    <div class="mb-3">
                      <label for="fname" class="form-label">First Name</label>
                      <input type="text" class="form-control" name="FirstName"value={this.state.student.FirstName} onChange={this.handleClick}/>
                    </div>


                    <div class="mb-3">
                      <label for="lname" class="form-label">Last Name</label>
                      <input type="text" class="form-control" name="LastName"value={this.state.student.LastName} onChange={this.handleClick}/>
                    </div>


                    <div class="mb-3">
                      <label for="age" class="form-label">Age</label>
                      <input type="number" class="form-control" name="age" value={this.state.student.age} onChange={this.handleClick}/>
                    </div>

                    <div class="mb-3">
                      <label for="class" class="form-label">Class</label>
                      <input type="text" class="form-control" name="classs" value={this.state.student.classs} onChange={this.handleClick}/>
                    </div>

                    <div class="mb-3">
                      <label for="percent" class="form-label">Percentage</label>
                      <input type="number" class="form-control" name="percent" value={this.state.student.percent} onChange={this.handleClick}/>
                    </div>

                    <button type="submit" class="btn btn-primary" onClick={this.handleSubmit}>Submit</button>
                </form>
            </div>
        )
    }
}
export default ADDorEDIT;