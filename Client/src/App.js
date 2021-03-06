import React, { Component } from "react";
import {BrowserRouter as Router, Route, Redirect} from "react-router-dom";
import Landing from "./Landing.js";
import RegPage from "./components/RegPage.js";
import Gallery from "./components/ClassMate.js";
import Main from "./mainPage.js";
import Pgallery from "./components/ClassParents.js";
import Faculty from "./components/Faculty.js";
import API from "./utils/API";

// if something is true, that means is logged in
// send them to the Dashboard
// if that thing is not true, that means user is not logged in



let isAuthenticated = false;//set to false when backend is complete comming back from server, not logged in

const PrivateRoute = ({component: Component, ...rest}) => {
    return (
        <Route
            exact
            {...rest}
            render={(props) => isAuthenticated
                ? <Component {...props} />
                : <Redirect to={{pathname: '/', state: {from: props.location}}}/>}
        />
    );
};

API.getLoggedInUser()
   .then(res => {
   	if(res.data.length > 0) {
   		isAuthenticated = res.data[0].logged_in;
   	}


   })
   .catch();

class App extends React.Component {
		state = {
			isAuthenticated : false
		}

		render(){
			return(
				<Router>
					<div>
						<Route exact path='/' component = {Landing} />
						<Route exact path = '/RegPage' component = {RegPage}/>
						<PrivateRoute exact path = '/Main' component = {Main}/>
						<Route exact path = '/Gallery' component = {Gallery}/>
						<Route exact path = '/Pgallery' component = {Pgallery}/>
						<Route exact path = '/Faculty' component = {Faculty}/>

					</div>
				</Router>

			);
		}
  }

export default App;
