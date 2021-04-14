import React from 'react'
const ShowStudent=(props)=>{
    
    const {person}=props;
    console.log(person)
    return(
      

    <div>
            <h1>Student Details</h1>
            {/*{(person?.regId? 
            <div className="card mb-3">
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{person?.FirstName} {person?.LastName}</h5>
                      <p className="card-text">Age:{person?.age}</p>
                      <p className="card-text">Class:{person?.class}</p>
                      <p className="card-text">Percentage:{person?.percent}%</p>
                      <p className="card-text">Grade:{person?.Grades}</p>
                    </div>
                </div>
            </div>
            </div>: <div>No details Available, Please select a student to view the details</div>)}*/}

        <div className="card mb-3">     
            <div className="row g-0">
                <div className="col-md-8">
                    <div className="card-body">
                      <h5 className="card-title">{person?.FirstName} {person?.LastName}</h5>
                      <p className="card-text">Age:{person?.age}</p>
                      <p className="card-text">Class:{person?.classs}</p>
                      <p className="card-text">Percentage:{person?.percent}%</p>
                      <p className="card-text">Grade:{person?.Grades}</p>
                    </div>
                </div>
            </div>
        </div>


    </div>


    );
}
export default ShowStudent;