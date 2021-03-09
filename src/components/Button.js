import React from 'react'

// onClick is currently empty by default
//      will work on that after fixing the architecture
const Button = ({text, onClick = () => {}}) => {
    return (
        <button>
            {text}
        </button>
    );
}

export default Button;