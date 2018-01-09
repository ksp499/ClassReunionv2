import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Jumbotron from "./Jumbotron.js"

import API from "../utils/API";



class RegPage extends Component {
   
    state = {
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        zipCode: "",
        email: "",
        userName: "",
        password: ""
    };

  componentDidMount() {
    this.loadUsers();
  }

  loadUsers = () => {
    API.getUsers()
      .then(res =>
        this.setState()
      )
      .catch(err => console.log(err));
  };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

      handleFormSubmit = event => {
          API.saveUser({
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            city: this.state.city,
            zipCode: this.state.zipCode,
            email: this.state.email,
            userName: this.state.userName,
            password: this.state.password
          })
            .then(alert("Registration Successful !!"))
            .catch(err => alert("All required fields are not completed."));
        
      };

    render() {
        return (
                   

            <div>
                <Jumbotron />
            
            <form className = 'regForm'>  
<<<<<<< HEAD
                <p className ='entry'> First Name: <input className = 'inField' value={this.state.firstName}  name = 'firstName' onChange={this.handleInputChange}/></p> 
                <p className ='entry'> Last Name: <input className = 'inField' value={this.state.lastName}  name = 'lastName' onChange={this.handleInputChange}/></p> 
                <p className ='entry'> Address: <input className = 'inField' value={this.state.address}  name = 'Address' onChange={this.handleInputChange}/></p>
                <p className ='entry'> City: <input className = 'inField' value={this.state.city}  name = 'city' onChange={this.handleInputChange}/></p>
                <p className ='entry'> State: <input className = 'inField' value={this.state.state}  name = 'State' onChange={this.handleInputChange}/></p> 
                <p className ='entry'> Zip Code: <input className = 'inField' value={this.state.zipCode}  name = 'zipCode' onChange={this.handleInputChange}/></p>
                <p className ='entry'> Email: <input className = 'inField' value={this.state.email}  name = 'email' onChange={this.handleInputChange}/></p>
                <p className ='entry'> User Name: <input className = 'inField' value={this.state.userName}  name = 'userName' onChange={this.handleInputChange}/></p> 
                <p className ='entry'> Password: <input className = 'inField' value={this.state.password}  name = 'password' onChange={this.handleInputChange}/></p> 
=======
                <p className ='entry'> First Name * : <input className = 'inField' value={this.state.firstName}  name = 'firstName' onChange={this.handleInputChange}/></p> 
                <p className ='entry'> Last Name * : <input className = 'inField' value={this.state.lastName}  name = 'lastName' onChange={this.handleInputChange}/></p> 
                <p className ='entry'> Address:   <input className = 'inField' value={this.state.address}  name = 'address' onChange={this.handleInputChange}/></p> 
                <p className ='entry'> City:   <input className = 'inField' value={this.state.city}  name = 'city' onChange={this.handleInputChange}/></p> 
                <p className ='entry'> State: <input className = 'inField' value={this.state.state}  name = 'state' onChange={this.handleInputChange}/></p> 
                <p className ='entry'> Zip Code: <input className = 'inField' value={this.state.zipCode}  name = 'zipCode' onChange={this.handleInputChange}/></p> 
                <p className ='entry'> Email * : <input className = 'inField' value={this.state.email}  name = 'email' onChange={this.handleInputChange}/></p>
                <p className ='entry'> User Name * : <input className = 'inField' value={this.state.userName}  name = 'userName' onChange={this.handleInputChange}/></p> 
                <p className ='entry'> Password * : <input className = 'inField' value={this.state.password}  name = 'password' onChange={this.handleInputChange}/></p> 
>>>>>>> dc5bcb8c32534333c67efdd004cf03f86c0a527d
            </form>
            <p style={{color: "white", marginLeft: "40px"}}>* = required </p>
            <Link to = '/'>
              <button onClick={this.handleFormSubmit}>Submit</button>    
           </Link>
        </div>
    );
    }
  }



export default RegPage;