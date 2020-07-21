import React, {Component} from 'react';
import './ReadEntry.css';

class ReadEntry extends Component {
    constructor(props) {
        super(props)
        }

    // moodColorAttribute = () => {
    //     return('border: solid 10px rbg(0,0,0)')
    // }

    render() {
        const moodColorAttribute ={
            borderStyle: 'solid',
            borderWidth: '10vw',
            borderColor: 'rgb(150, 255, 100)'
        }

        return(
            // Steps: Empty Mood Circle and Place Above Entry Info
            //        Border around ALL of entry display
            <section className='entryReader'>
                <div className='moodDisplay' style={moodColorAttribute}>{'date'}
                    <label  htmlFor='pleasantnessRange'> Pleasantness</ label>
                    <input type="range" min="0" max="255" value="100" className="slider" id="myRange" />
                    <br />
                    <input type="range" min="0" max="255" value="150" className="slider" id="myRange" />
                    <label  htmlFor='energyRange'/>Energy<label />
                    <p>Reflection : Nisi fugiat sint velit qui in adipisicing proident ad est incididunt ex. Commodo occaecat proident sit tempor labore. Mollit dolor eu aliquip magna veniam occaecat.</ p>                
                </ div>
            </ section>
        )
    }
};

export default ReadEntry;