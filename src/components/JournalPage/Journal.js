import React, {Component} from 'react';
import hayrApiService from '../../services/api-service'
import './Journal.css';

import EntryComp from '../EntryComp/EntryComp';

class Journal extends Component {
    constructor(props) {
        super(props);
        console.log('hi, pulling in username/display name');
        this.state = {
            entries: [{id:'6bafd632-5242-48ae-a284-d6c3b1e0bd72',userId: 1, mood: '0,63,255', reflection :`Yea, so I was just bored today. I''m not sure what else went on`},
            {id:'1e42251e-4246-46c4-b3e2-81c87ae24ca2',userId: 4, mood: '255,24,0', reflection :`Angry doesn''t do my feelings justice. Seeing that baby bird today made things better`},
            {id:'ad6da5cf-feaf-47b6-8c45-940cdc6a5dba',userId: 3, mood: '255,24,0', reflection :`I wrote so many poems today! Amazingggg. No energy to type them today`},
            {id:'a2a8552f-60b3-4327-b471-065ac1a644ce',userId: 2, mood: '88,0,255', reflection :`Yea, so I was just bored today. Susie made me bored`}
            ],
            currentDate:'okay'
        }
    }

    // static getDerrivedStateFromProps(props, state) {
    //     return {entries: props.entries,
    //             currentDate: props.date};
    // }

    // should entry/journal info be here, at props, or pulled earlier in lifeCycle and passed into context
    componentDidMount() {
        hayrApiService.getJournalInfo()
    }

    renderEntryComps() {
        return (
            this.state.entries.map( entries => 
                <EntryComp date={this.state.currentDate}></EntryComp>)
        )
    }

    render() {

        // for each entry in the state
// <Route path='/entry/:entryId'
//    component={(props) => {
//    console.log(props.match)
//    return <div />} 
//    }}
// />
        const date = 'today'
        return(
            <div className='journalContainer'>
                <section className='filterForm'>
                    Filter By Month By Year
                </section>
                <EntryComp date={date}></EntryComp>
                <EntryComp date={date}></EntryComp>
                {this.renderEntryComps}
            </div>
        )
    }
}

export default Journal;