import React, {Component} from 'react';
import hayrApiService from '../../services/api-service'
import AccountContext from '../../contexts/AccountContext'

import '../JournalPage/Journal.css';

import EntryComp from '../EntryComp/EntryComp';

class Community extends Component {
    static contextType = AccountContext;
    static defaultProps = {
        match: {
            params: {}
        }
    }
    constructor(props) {
        super(props);
        this.state = {
            communityEntries:[]
        }
    }


    // should entry/journal info be here, at props, or pulled earlier in lifeCycle and passed into context
    componentDidMount() {
        const { entryId } = this.props.match.params;
        if (entryId) {
            console.log('entryId from params',entryId)
            hayrApiService.getSimilarEntries(entryId)
            .then( entries => {
                this.setState({
                    communityEntries: entries
                });
            })
            .catch(error => {
                console.error({ error })
            })
        }

        else {
            hayrApiService.getPublicEntries()
            .then( entries => {
                this.setState({
                    communityEntries: entries
                });
            })
            .catch(error => {
                console.error({ error })
            })
        }
    }

    renderEntryComps() {
        let entries = this.state.communityEntries;
        if (!entries.length) {return}
        return (
            <section className='entryContainer'>
                {entries.map( entry =>
                    <EntryComp 
                        key={entry.id}
                        id={entry.id} 
                        moodPleasant={entry.mood_pleasant} 
                        moodEnergy={entry.mood_energy} 
                        reflection={entry.reflection}
                        path={'community'}></EntryComp>
                )}
            </section>
        )
    }

    render() {
        return(
            <div className='journalContainer community'>
                {this.renderEntryComps()}
            </div>
        )
    }
}

export default Community;