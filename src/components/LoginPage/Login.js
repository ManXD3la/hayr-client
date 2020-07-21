import React,{Component} from 'react';
import './Login.css'

import TokenService from '../../services/token-service'
import hayrApiService from '../../services/api-service';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailFormatY: true,
            loginAttempt: 0
        }
    }
    
    validateEmail = eMail => {
        console.log(eMail);
        const emailFormatRegEx = new RegExp(/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i);
        if (emailFormatRegEx.test(eMail)) {
            this.setState({
                emailFormatY: true
            })
        }
        else {
            this.setState({
                emailFormatY: false
            })
        }
        console.log(this.state.emailFormatY)
    }


    loginAttemptIncrement() {
        this.setState({
            loginAttempt: this.state.loginAttempt + 1
        })
        if (this.state.loginAttempt % 3 === 0) {
            console.log('Take a chill pill')
        }
    }

    displayError () {
        if (!this.state.emailFormatY) {
            return 'Please enter valid email address'
        }

        else {return ''}
    }
    // Needed functions:submit password set up

    handleLoginButt = (ev) => {
        ev.preventDefault();
        const {emailAddress, password} = ev.target;
        this.loginAttemptIncrement()
        console.log(`Login Attempt: ${this.state.loginAttempt}`, `Email: ${emailAddress.value}`, `Password: ${password.value}`);
        

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(emailAddress.value, password.value)
        );
        
        // hayrApiService.loginAuthorization( emailAddress.value, password.value) // may need a password converter before validate

        emailAddress.value = '';
        password.value = '';
    }

    render() {
        return(
            <form className='loginBox' onSubmit={this.handleLoginButt}>
                <h1>Login</h1>
                <label htmlFor='emailAddress'></label>
                <input required type='text' name='emailAddress' id='emailAddress' onChange={e => this.validateEmail(e.target.value)} placeholder='welcomeback@hayr.com'></input>
                <br/>
                <label htmlFor='password'></label>
                <input required type='password' name='password' id='password' placeholder='password'></input>
                <br/>
                <p className='formErrorMessage'>{this.displayError()}</p>
                <input type='submit' name='login' id='loginButt' value='Login'></input>
            </form>
        );
    }
}

export default Login;