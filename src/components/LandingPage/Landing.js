import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'

import './Landing.css';

import  hayrApiService from '../../services/api-service.js';
import TokenService from '../../services/token-service'

class Landing extends Component {
    constructor(props) {
        super(props)
        this.state = {
            emailFormatY: true,
            passwordLengthY: true
        }
    }
    // pass this through context
    validateEmail = eMail => {
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

    validatePassword = password => {
        if (password.length >= 8) {
            this.setState({
                passwordLengthY: true
            })
        }
        else {
            this.setState({
                passwordLengthY: false
            })
        }
        console.log(this.state.passwordLengthY)
    }
    
    
    handleSignUpSubmit = (ev) => {
        ev.preventDefault();
        const {displayName, emailAddress, password} = ev.target;

        console.log(displayName.value, emailAddress.value, password.value);

        hayrApiService.makeNewUser(displayName.value, emailAddress.value, password.value)

        TokenService.saveAuthToken(
            TokenService.makeBasicAuthToken(emailAddress.value, password.value)
        );
        displayName.value = '';
        emailAddress.value = '';
        password.value = '';

        return <Redirect to='/journal' />
    }

    displayError () {
        if (!this.state.passwordLengthY && !this.state.emailFormatY) {
            return 'Please enter valid email address and password'
        }

        if (!this.state.emailFormatY) {
            return 'Please enter valid email address'
        }

        if (!this.state.passwordLengthY) {
            return 'Please enter password with at least 8 characters'
        }

        else {return ''}
    }

    render() {
        const submitEnabled = (this.state.emailFormatY && this.state.passwordLengthY) || TokenService.hasAuthToken() ;

        return (
            <div className='landingContainer'>
                <header role="banner">
                <h1>HayR</h1>
                <h2>How are you, REALLY? A safe space</h2>
            </header>

            <section>
                <h3>Improve Your Life, Day by Day</h3>
                <p>HayR is built on the widsom and science of daily reflection and its positive impacts on quality of life. In three easy steps each day, you can be on your way more happiness, freedom and peace. </p>
            </section>

            <section>
                <h3>Take note of your triggers</h3>
                <p>You may know how you feel at the moment, but do you know everything that led up to that feeling? By recording your mood, in combination with creating a mental timeline of the day, we are able to better pinpoint the triggers and thoughts that brought you to your high and low feelings. Be as detailed as you want. The more, the better.</p>
            </section>

            <section>
                <h3>Record Reflection, Share Safely</h3>
                <p>As you become more comfortable with entering a few words about your day as  a reflection, you always have the option to reveal them to others anonymously. By sharing a reflection to the HayR community, you are able to see how others are during that day. When we accept and appreciate all thoughts and feelings that exist, we are able to appreciate the vastness of the human experience like stars in the night sky.</p>
            </section>

            <section>
                <h3>Ready to Reflect? Sign Up Here</h3>
                <form className='signup-form' id="signup-form" onSubmit={this.handleSignUpSubmit}>
                <div>
                <label htmlFor="displayName">Your name</label>
                <input required placeholder='First + Last or Username' type="text" name='displayName' id='displayName'/>
                </div>
                <div>
                <label htmlFor="emailAddress">Email</label>
                <input required type="text" name='emailAddress' id='emailAddress' 
                        onChange={e => this.validateEmail(e.target.value)}/>
                </div>
                <div>
                <label htmlFor="password">Password</label>
                <input required placeholder='8+ characters recommended' type="password" name='password' id='password' 
                        onChange={e => this.validatePassword(e.target.value)}/>
                </div>
                <p className='formErrorMessage'>{this.displayError()}</p>
                <button type='submit' disabled={!submitEnabled}>Sign Up</button>
            </form>
            </section>
        </div>
        )
    }
}


export default Landing;