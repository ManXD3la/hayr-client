import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';

import './NavBar.css';

import TokenService from '../../services/token-service'

// alter to update app state via context
class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state ={
            loggedIn: null,
        }
    }

    componentDidMount() {
        if (TokenService.hasAuthToken())
            this.setState({loggedIn: true})
    }

    handleLogoutClick = () => {
        TokenService.clearAuthToken();
        this.setState({loggedIn: false})
    }
    
    logoutToLanding() {
        if (this.state.loggedIn === false)
            return <Redirect to='/' />
    }

    renderAccountMenu() {
        if (TokenService.hasAuthToken()) {
            return(
            <div className='nav-left-side'>
                <Link className='app-title' to='/'>HayR</Link>
                <div className='account-menu'>
                    <Link className='nav-a' to='/journal/new-entry'>New Entry</Link>
                    <Link className='nav-a' to='/journal'>My Journal</Link>
                    <Link className='nav-a' to='/community'>Community</Link>
                </div>
            </div>
            )
        }
        else {
            return (
            <div className='nav-left-side'>
                <Link className='app-title' to='/'>HayR</Link>
            </div>
            )
        }
    }

    logInButt() {
        // show logout button/link, hayr name to show pop up message about app, invite a friend link/dropdown?
        return(
            <div className='nav-right-side'>
                {/* change to react 'scroll into view' funciton/condiiton */}
                <Link className='nav-a' to='/'> 
                Sign Up
                </Link>
                <Link className='nav-a' to='/login'>
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
                    className='nav-a' to='/'>
                Logout
                </Link>
            </div>
        )
    };


    render() {
        return (
            <nav role='navigation'>
                {this.renderAccountMenu()}
                {TokenService.hasAuthToken()
                ? this.logOutButt()
                : this.logInButt()}
                {this.logoutToLanding()}
            </nav>
        )
    }
}


export default NavBar;