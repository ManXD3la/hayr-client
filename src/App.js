import React, {Component} from 'react';
import {Route,Switch} from 'react-router-dom';

import './App.css';

import AppError from './AppError';

// need to import context
import PublicOnlyRoute from './components/Utils/PublicOnlyRoute';
import PrivateRoute from './components/Utils/PrivateRoute.js';

import AccountContext from './contexts/AccountContext'
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
      loggedIn: false,
      userName: '',
      journal:[]
    }
  }

  changeLogin = () => {
    this.setState({
      loggedIn: !this.state.loggedIn
    })
  }

  fillJournal = entries => {
    this.setState({
      journal: entries
    })
  }

  handleAddEntry = entry => {
    this.setState({
      journal: [
        ...this.state.journal,
        entry
      ]
    })
  }

  handleDeleteEntry = entryId => {
    this.setState({
      journal: this.state.journal.filter(entry => entry.id !== entryId)
    })
  }

  render() {
    const ctxValues = {
      loggedIn: this.state.loggedIn,
      journal: this.state.journal,
      changeLogin: this.changeLogin,
      fillJournal:this.fillJournal,
      addEntry:this.handleAddEntry,
      deleteEntry:this.handleDeleteEntry
    }

    return (
      <AccountContext.Provider value={ctxValues}>
        <div className="App">
          <NavBar ></NavBar>
          <main role='main'>
            <Switch>
              <Route exact path='/' component={Landing} />
              <PublicOnlyRoute exact path='/login' component={Login} />
              <PrivateRoute exact path='/journal' component={Journal} />
              <PrivateRoute exact path='/journal/new-entry' component={EntryForm} />
              <PrivateRoute exact path='/journal/:entryId' component={ReadEntry}/>
              {/* <Route exact path='/journal/:entryId/community/' component={Community} /> */}
              <PrivateRoute exact path='/journal/:entryId/community/' component={Community} />
              <PrivateRoute exact path='/community/' component={Community} />
              {/* <Route exact path='/community/:entryId' component={ReadEntry} /> */}
              {/* <PrivateRoute exact path='/community/:entryId' component={ReadEntry} /> */}

              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer></Footer>
        </div>
      </AccountContext.Provider>
    );
  }
}

export default App;