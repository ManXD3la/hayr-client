import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import TokenService from '../../services/token-service'

import './NavBar.css';

class NavBar extends Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
    }

    landingNav() {

    }

    loggedinButt() {
        // show logout button/link, hayr name to show pop up message about app, invite a friend link/dropdown?
        return(
            <div className='nav-right-side'>
                {/* change to react 'scroll into view' funciton/condiiton */}
                <Link to='/#signup-form'> 
                Sign Up
                </Link>
                <Link to='/login'>
                    Log In
                </Link>
            </div>
        )
    }

    loggedOutButt() {
        //show login button/link, show sign up link
        return(
            <div className='nav-right-side'>
                <Link onClick={this.handleLogoutClick}
                    to='/'>
                Logout
                </Link>
            </div>
        )
    };


    render() {
        return (
            <nav role='navigation'>
                <div className='nav-left-side'>
                <Link to='/'>HayR</Link>
                </div>
                {TokenService.hasAuthToken()
                ? this.loggedOutButt()
                : this.loggedinButt()}
            </nav>
        )
    }
}


export default NavBar;