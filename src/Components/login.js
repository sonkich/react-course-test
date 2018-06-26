import React, {Component} from 'react';
import {connect} from 'react-redux';

class Login extends Component {
    constructor() {
        super();
        this.state = {
            user: {
                username: '',
                password: ''
            }
        };
    };

    changeHandler = (event) => {
        let value = event.target.value;
        let name = event.target.name;

        let newUser = {...this.state.user};

        newUser[name] = value;

        this.setState({
            user: newUser
        });
    };

    render() {
        return (
           <div className="form">
               <label>
                   <span>Username</span>
                   <input name="username" onChange={this.changeHandler} type="text"/>
               </label>
               <label>
                   <span>Password</span>
                   <input name="password" onChange={this.changeHandler} type="text"/>
               </label>
               <button onClick={() => {this.props.submit(this.state.user)}}>Login</button>
           </div>
        );
    }
}

const matchStateToProps = (state) => {
    return {
        loggedUser: state.loggedUser
    }
};

const matchDispatchToProps = (dispatch) => {
    return {
        submit: (user) => {
            dispatch({type: 'LOGIN_USER', user})
        }
    }
};

export default connect(matchStateToProps, matchDispatchToProps)(Login);
