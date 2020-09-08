import React, {Component} from 'react';
import {Redirect} from 'react-router-dom'
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
        entry:{},
        shareType: '',
        deleteSuccess: '',
    }

    
    componentDidMount() {
        const { entryId } = this.props.match.params;
        hayrApiService.getEntry(entryId)
        .then(entry => {
            this.setState({
                entry: entry[0]
            })
        })
    }
    
    handleShareTypeChange = shareType => {
        if (shareType === 'public' ||shareType === 'private') {
            
            hayrApiService.patchUpdatedEntry(this.state.entry.id, shareType)
            .then( updatedEntry => {
                this.setState ({
                    entry: updatedEntry[0]
                })
            })
        }
        this.setState({
            shareType: shareType
        });
    }

    handleDeleteButton = id => {
        hayrApiService.deleteEntry(id)
        .then( res => {
            if (res.ok) {
                this.setState({deleteSuccess: true});
            }
        })
    }
    renderShareOptionsAndDelete() {
        let entry = this.state.entry
        if (entry.entry_share==='private') {
            return(
                <span className='share-option'>                
                    <label  htmlFor='shareType'/>Community = Sharing<label />
                    <select id='shareType' onChange={e => this.handleShareTypeChange(e.target.value)} >
                        <option value={'private'}>Keep Private</option>
                        <option  value={'public'}>Make Public</option>
                    </select>
                    <button type='button' onClick={e => this.handleDeleteButton(entry.id)}>Delete Entry</button>
                </span>
            )
        }

        else if (entry.entry_share==='public') {
            return (
                    <span className='share-option'>
                        <label  htmlFor='shareType'/>Community = Sharing<label />
                        <select id='shareType' onChange={e => this.handleShareTypeChange(e.target.value)} >
                            <option  value={'public'}>Keep Public</option>
                            <option value={'private'}>Make Private</option>
                        </select>
                        <button type='button' onClick={e => this.handleDeleteButton(entry.id)}>Delete Entry</button>
                    </span>
            )
        }
        else {
            return (
                <span className='share-option'>
                        <label  htmlFor='shareType'/>Community = Sharing<label />
                </span>
            )
        }
    }

    render() {
        const entry = this.state.entry
        const moodBorder ={
            border: `solid 10vh rgb(${entry.mood_pleasant},${entry.mood_energy},245)`
        }

        return(
            // Steps: Empty Mood Circle and Place Above Entry Info
            //        Border around ALL of entry display
            <section className='entryReader'>
                <div className='moodDisplay' style={moodBorder}>{entry.date}
                    <label  htmlFor='pleasantnessRange'> Pleasantness</ label>
                    <input type='range' min='0' max='255' value={`${entry.mood_pleasant}`} className='slider' id='pleasantnessRange' />
                    <br />
                    <input type='range' min='0' max='255' value={`${entry.mood_energy}`} className='slider' id='energyRange' />
                    <label  htmlFor='energyRange'/>Energy<label />
                    <br/>
                    Reflection:
                    <p>{entry.reflection}</p>
                    {this.renderShareOptionsAndDelete()}
                </div>
                {this.state.deleteSuccess === true ? <Redirect to='/journal'/> : null }
            </ section>
        )
    }
};

export default ReadEntry;
