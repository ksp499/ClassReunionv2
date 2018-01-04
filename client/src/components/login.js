
    
import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (

        <div>
        
        <div id= "submit"><input type="button" value="Login" name="Submit" onClick= "validate()" /> </div>
        <div id = "UsrData">
        ENTER USER NAME <input type="text" name="username" /><br />
        
        ENTER PASSWORD <input type="password" name="pword" />
        
        </div>
        
        </div>
		);
		}
	}
export default Login;
       