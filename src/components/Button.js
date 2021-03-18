import React from 'react'

// onClick is currently empty by default
//      will work on that after fixing the architecture
const Button = ( {text, onClick} ) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
}

export default Button;
