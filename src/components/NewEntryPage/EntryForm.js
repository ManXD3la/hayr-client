import React, {Component} from 'react';
import EntryFormContext from '../../contexts/EntryFormContext';
import AccountContext from '../../contexts/AccountContext'
import FormSlider from './FormSlider'
import './EntryForm.css';
import hayrApiService from '../../services/api-service';

class EntryForm extends Component {
    // state for mood sliders for submission
    static contextType = AccountContext;
    constructor() {
        super()
        this.state = {
            reflection:'',
            moodPleasant:127,
            moodEnergy: 127,
            shareType: '',
        }
    }
    //create context for 
    handlePleasantSliderChange = newValue => {
        this.setState({
            moodPleasant: newValue
        })
    }

    handleEnergySliderChange = newValue => {
        this.setState({
            moodEnergy: newValue
        })
    }

    handleReflectionChange = newReflection => {
        this.setState({
            reflection: newReflection
        });
    }

    handleShareTypeChange = shareType => {
        this.setState({
            shareType: shareType
        });
    }

    handleSubmit = (ev) => {
        ev.preventDefault();
        const{ reflection, moodPleasant, moodEnergy,shareType } = this.state

        hayrApiService.postEntry(reflection, moodPleasant, moodEnergy, shareType)
        .then(entry => {
            this.context.addEntry(entry[0])
            this.props.history.push(`/journal`)
            })
        .catch(error => {
            console.error({ error })
        })
    }


    render() {
        const entryFormCtxValues ={
            moodPleasant: this.state.moodPleasant,
            moodEnergy: this.state.moodEnergy,
            changePleasant: this.handlePleasantSliderChange,
            changeEnergy: this.handleEnergySliderChange
        }
        return (
            <EntryFormContext.Provider value={entryFormCtxValues}>
                <form className='newEntryForm' onSubmit={this.handleSubmit}>
                    <h1>How are you?</h1>
                    <label htmlFor='myPleasantness'>My Pleasantness</label>
                    <FormSlider id='myPleasantness' change='pleasant'/>
                    <label htmlFor='myEnergy'>My Energy</label>
                    <FormSlider id='myEnergy' change='energy'/>
                    {/* <div>Activity Component Here</div> */}
                    <label htmlFor='myReflection'>My Reflection</label>
                    <textarea className='reflectionText' id='myReflection' onChange={e => this.handleReflectionChange(e.target.value)}
                            placeholder='The breaking day has wisdom, the falling day has experience'></textarea>
                    <label htmlFor='shareType'>Share with Others?</label>
                    <select id='shareType' onChange={e => this.handleShareTypeChange(e.target.value)} >
                        <option value={'private'}>Make Private</option>
                        <option  value={'public'}>Make Public</option>
                    </select>
                    <input type='submit' id='submitButt'></input>
                </form>
            </EntryFormContext.Provider>
        )
    }
}

export default EntryForm;