import React from 'react';
import Button from './Button';

const Keyboard = () => {
    return (
        <div>
            <div className='row'>
                <Button text="del"/>
                <Button text="1/x"/>
                <Button text="x^2"/>
                <Button text="/"/>
            </div>

            <div className='row'>
                <Button text="7"/>
                <Button text="8"/>
                <Button text="9"/>
                <Button text="x"/>
            </div>
                <Button text="4"/>
                <Button text="5"/>
                <Button text="6"/>
                <Button text="-"/>
            <div className='row'>
                <Button text="1"/>
                <Button text="2"/>
                <Button text="3"/>
                <Button text="+"/>
            </div>

            <div className='row'>
                <Button text="+/-"/>
                <Button text="0"/>
                <Button text="."/>
                <Button text="="/>
            </div>            
        </div>
    );
}

export default Keyboard;
