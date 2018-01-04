import React, { Component } from 'react';
// this is the registration Button on the Landing Page.
import {Link} from 'react-router-dom';

class Registration extends Component {
  render() {
    return (

        <div>
        <Link to = '/RegPage'> <button>Register</button> </Link>
        </div>
		);
	}
}
export default Registration;