import React, { Component } from 'react';
import Steer from './styles/Steer3.png';
import Registration from "./components/Registration.js";
import Login from "./components/login.js"

class Landing extends Component {
  render() {
    return (
      
      <div className="App">
       
       <h1 className = "App-header">Farwell Class of 78</h1>

        <div className="App-intro">
        Welcome
        </div>
        <img src={Steer} className="App-logo" alt="logo" />
        <div>
      
        </div>
        <Registration />
        <Login ath={false}/>
        
        
      
        
      </div>

    );
  }
}

export default Landing;
