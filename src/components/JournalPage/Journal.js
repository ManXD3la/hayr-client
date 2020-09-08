import React, {Component} from 'react';
import hayrApiService from '../../services/api-service'
import AccountContext from '../../contexts/AccountContext'

import './Journal.css';

import EntryComp from '../EntryComp/EntryComp';

class Journal extends Component {
    static contextType = AccountContext;

    constructor(props) {
        super(props);
        this.state = {
            entries:[],
        }
    }


    // should entry/journal info be here, at props, or pulled earlier in lifeCycle and passed into context
    componentDidMount() {
        hayrApiService.getJournalInfo()
        .then( entries => {
            this.setState({
                entries: entries
            });
            this.context.fillJournal(entries);
        })
        .catch(error => {
            console.error({ error })
        })
        // then set to app state/context
    }

    renderEntryComps() {
        let entries = this.state.entries;
        if (!entries.length) {return}
        return (
            <section className='entryContainer'>
                {entries.map( entry =>
                    <EntryComp 
                    key={entry.id}
                    date={entry.date_created.slice(0,10).split('-').reverse().join('/')} 
                    id={entry.id} 
                    moodPleasant={entry.mood_pleasant} 
                    moodEnergy={entry.mood_energy} 
                    reflection={entry.reflection}
                    zIndex={entry.id * -1}
                    path={'journal'}></EntryComp>
                )}
            </section>
        )
    }

    render() {        
        return(
            <div className='journalContainer'>
                {this.renderEntryComps()}
            </div>
        )
    }
}

export default Journal;