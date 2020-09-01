import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

import './NavBar.css';

import TokenService from '../../services/token-service'


class NavBar extends Component {

    handleLogoutClick = () => {
        TokenService.clearAuthToken()
        return <Redirect to='/' />
    }

    landingNav() {

    }

    logInButt() {
        // show logout button/link, hayr name to show pop up message about app, invite a friend link/dropdown?
        return(
            <div className='nav-right-side'>
                {/* change to react 'scroll into view' funciton/condiiton */}
                <Link to='/'> 
                Sign Up
                </Link>
                <Link to='/login'>
                    Log In
                </Link>
            </div>
        )
    }

    logOutButt() {
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
                {TokenService.hasAuthToken()
                ? <Link to='/journal'>Journal</Link>
                : ''}
                </div>
                {TokenService.hasAuthToken()
                ? this.logOutButt()
                : this.logInButt()}
            </nav>
        )
    }
}


export default NavBar;