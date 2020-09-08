import React,{Component} from 'react';
import {Redirect} from 'react-router-dom'

import './Login.css'

import TokenService from '../../services/token-service'
import hayrApiService from '../../services/api-service';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loginAttempt: 0
        }
    }

    componentDidMount() {
        TokenService.clearAuthToken()
    }

    loginAttemptIncrement() {
        this.setState({
            loginAttempt: this.state.loginAttempt + 1
        })
        if (this.state.loginAttempt % 3 === 0) {
        }
    }

    displayError () {
        if (this.state.loginAttempt) {
            return '...Please enter valid user name and password...'
        }
        if (this.state.loginAttempt === -1) {
            return '...please wait...'
        }
    }

    handleLoginButt = (ev) => {
        ev.preventDefault();
        const {userName, password} = ev.target;
        this.loginAttemptIncrement()        

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(userName.value, password.value)
        );
        
        hayrApiService.loginAuth()
        .then( userInfo => {
            if (!userInfo.ok) {
                TokenService.clearAuthToken()
            }
            else {    
                userName.value = '';
                password.value = '';
                this.setState({
                    loginAttempt: -1,
                    loginSuccess: true
                })
            }
            })
    }

    loginSuccess() {
        if (this.state.loginSuccess) 
        return <Redirect to="/journal" />
    }

    render() {
        return(
            <form className='loginBox' onSubmit={this.handleLoginButt}>
                <h1>Login</h1>
                <br />
                <label htmlFor='userName'></label>
                <input required type='text' name='userName' id='userName' placeholder='User name'></input>
                <br/>
                <label htmlFor='password'></label>
                <input required type='password' name='password' id='password' placeholder='Password'></input>
                <br/>
                <p className='formErrorMessage'>{this.displayError()}</p>
                <input type='submit' name='login' id='loginButt' value='Login'></input>
                {this.loginSuccess()}
            </form>
        );
    }
}

export default Login;