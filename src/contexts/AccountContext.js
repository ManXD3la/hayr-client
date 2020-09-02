import React from 'react';

const AccountContext = React.createContext({
    loggedIn: false,
    userName: '',
    journal:[],
    changeLogin: () => {},
    fillJournal: () => {},
    addEntry: () => {},
    deleteEntry: () => {},
})

export default AccountContext