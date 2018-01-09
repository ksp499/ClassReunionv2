import React, { Component } from 'react';
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import API from "../utils/API";
import { Link } from 'react-router-dom';

class Login extends Component {

  state = {
        userName: "",
        password: "",
        isAuthenticated: false
    };

  handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
  };

  handleFormSubmit = event => {
    API.validateUser(this.state.userName)
        .then(res => {
            if (res.data[0].password === this.state.password) {
               this.state.isAuthenticated = true;
               console.log(this.props.ath);
            }
            else {
                alert("Wrong username/password !");
            }


        });
  };

  render() {
    return (

        <div>
        <Link to="/Main">
        <div id= "submit">
        <input className = "LogBut" type="button" value="Login" name="Submit" onClick= {this.handleFormSubmit} /> </div>
        </Link>

        <div id = "UsrData">
        ENTER USER NAME <input className = "Udata" type="text" value={this.state.userName} name="userName" onChange={this.handleInputChange} /><br />
        
        ENTER PASSWORD <input className = "Udata" type="password" value={this.state.password} name="password" onChange={this.handleInputChange} />
        </div>

        </div>
		);
		}
	}
export default Login;
       