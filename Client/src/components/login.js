
    
import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (

        <div>
        
        <div id= "submit"><input className = "LogBut" type="button" value="Login" name="Submit" onClick= "validate()" /> </div>
        <div id = "UsrData">
        ENTER USER NAME <input className = "Udata" type="text" name="username" /><br />
        
        ENTER PASSWORD <input className = "Udata" type="password" name="pword" />
        
        </div>
        
        </div>
		);
		}
	}
export default Login;
       