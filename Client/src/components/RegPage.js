
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Jumbotron from "./Jumbotron.js"
import NavBar from './Navbar.js'
import Footer from './footer.js'



class RegPage extends Component {
   
    constructor() {
        super();

        this.state = {
            firstName: 'Dwayne',
            lastName: 'Obenshain',
            Address: '8890 Terrace',
            City: 'Wills Point'
        }
    }

    changeName = () => {
        this.setState({firstName: 'Patrick', lastName: 'Does', Address:'New York'});
    };

    getValue = (event) => {
        this.setState({[event.target.name]: event.target.value});
    };

    getAllState = () => {
      console.log("State: ", this.state);
    };

    render() {
        return (
                   

            <div>
                <NavBar />
                <Jumbotron />
            
            <form className = 'regForm'>  
                <p className ='entry'> First Name: <input className = 'inField' type="text" name = 'firstName' onChange={this.getValue}/></p> 
                <p className ='entry'> Last Name: <input className = 'inField' type="text" name = 'lastName' onChange={this.getValue}/></p> 
                <p className ='entry'>   Address:   <input className = 'inField' type="text" name = 'Address' onChange={this.getValue}/></p> 
                <p className ='entry'>City:   <input className = 'inField' type="text" name = 'City' onChange={this.getValue}/></p> 
                <p className ='entry'> State: <input className = 'inField' type="text" name = 'State' onChange={this.getValue}/></p> 
                <p className ='entry'> Zip Code: <input className = 'inField' type="text" name = 'zipCode' onChange={this.getValue}/></p> 
                <p className ='entry'> Email Address: <input className = 'inField' type="text" name = 'Email' onChange={this.getValue}/></p> 
                <p className ='entry'> User Name: <input className = 'inField' type="text" name = 'userName' onChange={this.getValue}/></p> 
                <p className ='entry'> Password: <input className = 'inField' type="text" name = 'Password' onChange={this.getValue}/></p> 

            
            </form>
            <Link to = '/'>
            <button className = "LogBut">Submit</button> 
           
           </Link>
           <Footer />
        </div>
    );
    }
  }



export default RegPage;