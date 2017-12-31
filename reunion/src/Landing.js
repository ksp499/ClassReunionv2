import React, { Component } from 'react';
import Steer from './styles/Steer2.jpg';
import './styles/App.css';
import Registration from "./components/Registration.js";
import Header from "./components/Header.js";
import Login from "./components/login.js"

class Landing extends Component {
  render() {
    return (
      
      <div className="App">
       <Header />
        
        <div className="App-intro">
        Welcome
        </div>
        <img src={Steer} className="App-logo" alt="logo" />
        <div>
      
        </div>
        <Registration />
        <Login />
        
        
      
        
      </div>

    );
  }
}

export default Landing;
