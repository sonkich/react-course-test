import React, {Component} from 'react';
import Login from './Components/login'
import List from './Components/List';
import {connect} from 'react-redux';

class App extends Component {
    render() {
        if(this.props.loggedUser) {
            return (
                <List />
            );
        } else {
            return (
                <Login />
            )
        }
    }
}

const matchStateToProps = (state) => {
    return {
        loggedUser: state.loggedUser
    }
};

const matchDispatchToProps = (dispatch) => {
    return {

    }
};

export default connect(matchStateToProps, matchDispatchToProps)(App);
