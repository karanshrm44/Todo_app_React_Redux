import React from 'react';
import './Display.css';

const Display=(props)=>{

    return(
        <div className="dis">
           <div className="display">
                <p >{props.item}</p>
           </div>
           <div className="display">
            <button onClick={props.clicked}>Delete</button>
            </div>
        </div>
    )
}

export default Display;