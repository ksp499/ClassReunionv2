import React, { Component } from 'react';

import './styles/App.css';
import Header from "./components/Header.js";
import Sidebar from "./components/sidebar.js"

	
class Main extends Component {
  render() {
    return (

       <div className="App">
       <Header />
        
        <Sidebar />
        </div>
        
      

    );
  }
}

export default Main;

	

 