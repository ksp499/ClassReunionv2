
import React, { Component } from 'react'
import Jumbotron from "./Jumbotron.js"
import Sidebar from "./sidebar.js"
import Footer from "./footer.js"
import Eubank from "./images/eubank.jpg"
import Norton from "./images/nortons.jpg"
import Walls from "./images/Walls.jpg"
import NavBar from './Navbar.js'
import Player from "./musicPlayer.js"





class ClassMate extends Component {
  render() {
    return (
<div>
<NavBar />
<Jumbotron />
<Sidebar />     
<br />
<div className = "PhotoBox">
<img className="rounded-circle img-fluid d-block mx-auto photo" src={Eubank} alt="Coming soon" />
          <h5>Mr & Mrs Eubank  
          </h5>
           <br />
</div>

<div className = "PhotoBox">
<img className="rounded-circle img-fluid d-block mx-auto photo" src={Norton} alt="Coming soon" />
          <h5>Mr & Mrs Norton
          </h5>
           <br />
</div>

<div className = "PhotoBox">
<img className="rounded-circle img-fluid d-block mx-auto photo" src={Walls} alt="Coming soon" />
          <h5>Mr & Mrs Walls
          </h5>
           <br />
</div>
<Player />
<Footer />
</div>
        );
    }
  }

export default ClassMate;