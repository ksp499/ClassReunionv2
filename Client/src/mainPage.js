import React, { Component } from 'react';
import './styles/App.css';
import NavBar from './components/Navbar.js'
import Sidebar from "./components/sidebar.js"
import Jumbotron from "./components/Jumbotron.js"
import Panel from "./components/panel.js"
import CommContain from "./components/CommentContainer.js"
import Footer from "./components/footer.js"


class Main extends Component {
  render() {
    return (

       <div className="App">
      
       <Jumbotron />
        <Sidebar />
        <Panel />
        <CommContain />
        <NavBar />
        <Footer />
       
        </div>
        
      

    );
  }
}

export default Main;

	

 