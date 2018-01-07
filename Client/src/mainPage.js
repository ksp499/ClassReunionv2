import React, { Component } from 'react';

import './styles/App.css';
import NavBar from './components/Navbar.js'
import Sidebar from "./components/sidebar.js"
import Jumbotron from "./components/Jumbotron.js"
import Panel from "./components/panel.js"
import Poll from "./components/PollContainer.js"
import Player from "./components/musicPlayer.js"
import CommContain from "./components/CommentContainer.js"
import Footer from "./components/footer.js"


class Main extends Component {
  render() {
    return (

       <div className="App">
       <NavBar />
       <Jumbotron />
        <Sidebar />
        <Panel />
        <CommContain />
        <Footer />
       
        </div>
        
      

    );
  }
}

export default Main;

	

 