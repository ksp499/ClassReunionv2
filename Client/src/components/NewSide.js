import React, { Component } from 'react';
import { Link } from 'react-router-dom'



const Newside = () => (
 
    <div className= 'sidebar'>

<nav className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
      <a className="navbar-brand js-scroll-trigger" href="#page-top">
        <span className="d-block d-lg-none">Start Bootstrap</span>
        <span className="d-none d-lg-block">
          <img className="img-fluid img-profile rounded-circle mx-auto mb-2" src="img/profile.jpg" alt="" />
        </span>
      </a>
      
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#about">About</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#experience">Experience</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#education">Education</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#skills">Skills</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#interests">Interests</a>
          </li>
          <li className="nav-item">
            <a className="nav-link js-scroll-trigger" href="#awards">Awards</a>
          </li>
        </ul>
      </div>
    </nav>



      </div>
    
 
)

export default Newside