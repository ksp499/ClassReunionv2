
    
import React from 'react';
import {Link} from 'react-router-dom';

// State


// two ways
    // state = {
    //     username: 'accimeesterlin',
    //     age: 5,
    //     address: '8890 Terrace'
    // };


class Login extends React.Component {

    constructor() {
        super();

        this.state = {
            username: 'accimeesterlin',
            password: 'qwertyu',
           
        }
    }

    changeName = () => {
        this.setState({username: 'Patrick', password: 10, });
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
                
                <p>Username: {this.state.username}</p>
                <p>password: {this.state.password}</p>

                <input type="text" name = 'username' onChange={this.getValue}/> <br/>
                <input type="password" name = 'password' onChange={this.getValue}/> <br/>
                <Link to='/main'>
                <button onClick={this.getAllState}>Send </button>
                
                    

                </Link>
            </div>
        );
    }
}

export default Login;
       