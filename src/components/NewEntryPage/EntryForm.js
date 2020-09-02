import React, {Component} from 'react';
import EntryFormContext from '../../contexts/EntryFormContext';
import FormSlider from './FormSlider'
import './EntryForm.css';
import hayrApiService from '../../services/api-service';

class EntryForm extends Component {
    // state for mood sliders for submission
    constructor() {
        super()
        this.state = {
            reflection:'',
            moodPleasant:127,
            moodEnergy: 127
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

    handleSubmit = (ev) => {
        ev.preventDefault();
        const{ reflection, moodPleasant, moodEnergy } = this.state
        if (!reflection)
            console.log('relfection empty',); 
        // hayrApiService.postEntry(reflection, moodPleasant, moodEnergy)
        // .then(entry => {
        //     this.context.addentry(entry[0])
        //     this.props.history.push(`/journal`)
        //     })
        // .catch(error => {
        //     console.error({ error })
        // })
        //context add entry
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
                    <input type='submit' id='submitButt'></input>
                </form>
            </EntryFormContext.Provider>
        )
    }
}

export default EntryForm;