import React from 'react';
import './Screen.css'

const Screen = ({text}) => {
    return(
        <div className="rectangle">
            {text}
        </div>
    );
}

export default Screen;