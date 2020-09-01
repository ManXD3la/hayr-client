import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';

import AppError from './AppError';

// need to import context
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute';
import PrivateRoute from './components/Utils/PrivateRoute.js';

import Community from './components/CommunityPage/Community';
import EntryForm from './components/NewEntryPage/EntryForm';
import Footer from './components/Footer/Footer'
import Journal from './components/JournalPage/Journal';
import Landing from './components/LandingPage/Landing';
import Login from './components/LoginPage/Login';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFoundPage/NotFound';
import ReadEntry from './components/ReadEntryPage/ReadEntry';

class App extends Component {
//create state with the following
  constructor(props) {
    super(props)
    this.state ={
      userName: '',
      password: ''
    }
  }

  render() {
    return (
      <div className="App">
        <NavBar ></NavBar>
        <main role='main'>
          <Switch>
            {/*<PublicOnlyRoute exact path='/' component={Landing} />  */}
            <Route exact path='/' component={Landing} />
            <PublicOnlyRoute exact path='/login' component={Login} />
            {/* Private Route below except for NotFound */}
            <Route exact path='/journal' component={Journal} />
            <Route exact path='/journal/new-entry' component={EntryForm} />
            <Route exact path='/journal/entryId' component={ReadEntry}/>
              {/*^^^ Make sure dynamic route (:entryId) ^^^ */}
            <Route exact path='/community/:entryId' component={Community} /> this one
            <Route component={NotFound} />
          </Switch>
        </main>
        <Footer></Footer>
      </div>
    );
  }
}

export default App;