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
            testEntries: [{id: 1,  mood_pleasant: 235, mood_energy: 255, reflection :`Yea, so I was just bored today. I''m not sure what else went on`, date_created: '2020-08-31 23:16:45'},
            {id: 4, mood_pleasant: 255, mood_energy: 205, reflection :`Angry doesn''t do my feelings justice. Seeing that baby bird today made things better`, date_created: '2020-08-31 23:16:45'},
            {id: 3,  mood_pleasant: 215, mood_energy: 255, reflection :`I wrote so many poems today! Amazingggg. No energy to type them today`, date_created: '2020-08-31 23:16:45'},
            {id: 2, mood_pleasant: 255, mood_energy: 155, reflection :`Yea, so I was just bored today. Susie made me bored`, date_created: '2020-08-31 23:16:45'}
            ],
            currentDate:'okay'
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
            <section>
                {entries.map( entry =>
                    <EntryComp 
                        key={entry.id}
                        date={entry.date_created.slice(0,10).split('-').reverse().join('/')} 
                        id={entry.id} 
                        moodPleasant={entry.mood_pleasant} 
                        moodEnergy={entry.mood_energy} 
                        relfection={entry.reflection}></EntryComp>
                )}
            </section>
        )
    }

    render() {
        
        const date = 'today'
        return(
            <div className='journalContainer'>
                <section className='filterForm'>
                    Filter By Month By Year
                </section>
                {/* <EntryComp date={date}></EntryComp>
                <EntryComp date={date}></EntryComp> */}
                {this.renderEntryComps()}
            </div>
        )
    }
}

export default Journal;