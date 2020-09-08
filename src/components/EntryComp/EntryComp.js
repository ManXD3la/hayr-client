import React from 'react';
import {Link} from 'react-router-dom'
import './EntryComp.css';

function EntryComp(props) {
    const moodBorder ={
        'border-color': `rgb(${props.moodPleasant},${props.moodEnergy},245)`,
        }



    return (
        <Link to={`/${props.path}/${props.id}`} className='entryLink' style={moodBorder}>
            <div>
            {!props.date? null: props.date}
            </div>
        </Link>
    )
};

export default EntryComp;