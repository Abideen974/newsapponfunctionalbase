import React from 'react'
import logo from './logo.png';
import {
  Link
} from "react-router-dom";
import { logDOM } from '@testing-library/react';
const Navbar = () =>  {
    return (
      <div>
          <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <Link className="navbar-brand"  to="#">iNews</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <Link className="nav-link " aria-current="page" to="/home">Home</Link>
                        </li>
                        {/* <li className="nav-item"><Link className="nav-link" to="/about">About</Link> </li> */}
                        <li className="nav-item"><Link className="nav-link" to="/business">Business</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/general">General</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/health">Health</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/science">Science</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link> </li>
                        <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link> </li>
                        
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                              Select country
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                              <li><a className="dropdown-item" href="#">USA</a></li>
                              <li><a className="dropdown-item" href="#">Pakistan</a></li>

                              <li><a className="dropdown-item" href="#">India</a></li>
                              
                            </ul>
                          </li>
                         </ul>
                    
                    </div>
                </div>
            </nav>


      </div>
    )

}

export default Navbar