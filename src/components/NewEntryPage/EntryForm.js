import React, {Component} from 'react';
import FormSlider from './FormSlider'
import './EntryForm.css';

class EntryForm extends Component {


    handleSubmit = (ev) => {
        ev.preventDefault();

        //or pull from state
        const {mood1, mood2, reflection} = ev.target

        
    }


    render() {
        return (
            <form className='newEntryForm' onSubmit={this.handleSubmit}>
                <h1>How are you?</h1>
                <label htmlFor='myPleasantness'>My Pleasantness</label>
                <FormSlider id='myPleasantness' />
                <label htmlFor='myEnergy'>My Energy</label>
                <FormSlider id='myEnergy' />
                <div>Activity Component Here</div>
                <label htmlFor='myReflection'>My Reflection</label>
                <textarea required className='reflectionText' id='myReflection' onChange={null}
                        placeholder='The breaking day has wisdom, the falling day has experience'></textarea>
                <input type='submit' id='submitButt'></input>

            </form>
        )
    }
}

export default EntryForm;