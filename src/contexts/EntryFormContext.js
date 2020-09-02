import React from 'react';

const EntryFormContext = React.createContext({
    moodPleasant: '',
    moodEnergy: '',
    changePleasant: () => {},
    changeEnergy: () => {}
})

export default EntryFormContext