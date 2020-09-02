import React, {Component} from 'react';
import AccountContext from '../../contexts/AccountContext'
import './ReadEntry.css';
import hayrApiService from '../../services/api-service';

class ReadEntry extends Component {
    static contextType = AccountContext
    static defaultProps = {
        match: {
            params: {}
        }
    }
    state = {
        entry:{}
    }

    componentDidMount() {
        const { entryId } = this.props.match.params;
        hayrApiService.getEntry(entryId)
        .then(entry => {
            console.log('from get entry service:', entry)
            this.setState({
                entry: entry[0]
            })
        })
    }

    render() {
        // const { journal } = this.context;
        // const entry = journal.find(entry => entry.id == entryId)
        const entry = this.state.entry
        console.log('entry wheres reflection', entry);
        const moodBorder ={
            border: `solid 10vh rgb(255,${entry.mood_pleasant},${entry.mood_energy})`
        }

        return(
            // Steps: Empty Mood Circle and Place Above Entry Info
            //        Border around ALL of entry display
            <section className='entryReader'>
                <div className='moodDisplay' style={moodBorder}>{entry.date}
                    <label  htmlFor='pleasantnessRange'> Pleasantness</ label>
                    <input type="range" min="0" max="255" value="100" className="slider" id="myRange" />
                    <br />
                    <input type="range" min="0" max="255" value="150" className="slider" id="myRange" />
                    <label  htmlFor='energyRange'/>Energy<label />
        <p>Reflection : {entry.reflection}</ p>                
                </ div>
            </ section>
        )
    }
};

export default ReadEntry;