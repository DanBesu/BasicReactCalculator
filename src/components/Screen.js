import React from 'react';
import './Screen.css'

const Screen = ({textChange}) => {
    return(
        <div className="rectangle">
            {textChange}
        </div>
    );
}

export default Screen;