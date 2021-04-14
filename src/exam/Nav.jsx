import React from 'react'
import { Link } from 'react-router-dom';
const Nav=()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
              <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <Link to="/home" className="nav-link active" aria-current="page" >Home</Link>
                    </li>
                    
                    <li className="nav-item">
                      <Link to="/allList" className="nav-link active" aria-current="page" >Todos</Link>
                    </li>
                    <li className="nav-item">
                      <Link to="/add" className="nav-link active" aria-current="page" >Create</Link>
                    </li>
                  </ul>                 
                </div>
              </div>
            </nav>
        </div>
    )
}
export default Nav;