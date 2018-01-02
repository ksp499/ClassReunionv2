const isAuthenticated = true;//set to false when backend is complete comming back from server, not logged in

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