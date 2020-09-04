import React from 'react';
import {Link} from 'react-router-dom'
import './EntryComp.css';

function EntryComp(props) {
    console.log(props.date)
    const moodBorder ={
        border: `solid 10rem rgb(255,${props.moodPleasant},${props.moodEnergy})`
    }



    return (
        <Link to={`/${props.path}/${props.id}`}>
            <div className='entryBox' style={moodBorder}>
                <div className='entryContent'>
                    {!props.date? null: props.date}
                </div>
            </div>
        </Link>
    )
};

export default EntryComp;