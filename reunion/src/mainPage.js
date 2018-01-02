import React, { Component } from 'react';

import './styles/App.css';
import Sidebar from "./components/sidebar.js"
import Jumbotron from "./components/Jumbotron.js"
import Panel from "./components/panel.js"
import Poll from "./components/PollContainer.js"

class Main extends Component {
  render() {
    return (

       <div className="App">
       <Jumbotron />
      
        
        <Sidebar />
        <Panel />
        <Poll />
        </div>
        
      

    );
  }
}

export default Main;

	

 