
import React, { Component } from 'react';
import Jumbotron from "./Jumbotron.js"
import Sidebar from "./sidebar.js";
import Eubank from "./images/eubank.jpg"
import Norton from "./images/nortons.jpg"
import Walls from "./images/Walls.jpg"




class ClassMate extends Component {
  render() {
    return (
<div>
<Jumbotron />
<Sidebar />     
<br />
<div className = "PhotoBox">
<img src = {Eubank} alt="Coming soon" className = "photo" />
          <h5>Mr & Mrs Eubank  
          </h5>
           <br />
</div>

<div className = "PhotoBox">
<img src = {
  Norton
} alt="Coming soon" className = "photo" />
          <h5>Mr & Mrs Norton
          </h5>
           <br />
</div>

<div className = "PhotoBox">
<img src = {Walls} alt="Coming soon" className = "photo" />
          <h5>Mr & Mrs Walls
          </h5>
           <br />
</div>

</div>
        );
    }
  }

export default ClassMate;