import React from 'react';
import {Link} from 'react-router-dom'
import './EntryComp.css';

function EntryComp(props) {
    console.log(props.date)
    const moodBorder ={
        border: `solid 10vh rgb(255,${props.moodPleasant},${props.moodEnergy})`
    }
    return (
        <Link to={`/journal/${props.id}`}>
            <div className='entryBox' style={moodBorder}
>
                {props.date}
            </div>
        </Link>
    )
};

export default EntryComp;