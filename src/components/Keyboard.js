import React from 'react';
import Button from './Button';

const Keyboard = ({displayNewDigit, del, reverseSign, reset, equals, powerTwo, add, subtract, multiply, divide}) => {
    return (
        <div>
            <div className='row'>
                <Button text="del" onClick={del}/>
                <Button text="C" onClick={reset}/>
                <Button text="x^2" onClick={() => powerTwo()}/>
                <Button text="/" onClick={()=>divide()}/>
            </div>

            <div className='row'>
                <Button text="7" onClick={()=>displayNewDigit(7)}/>
                <Button text="8" onClick={()=>displayNewDigit(8)}/>
                <Button text="9" onClick={()=>displayNewDigit(9)}/>
                <Button text="x" onClick={()=>multiply()}/>
            </div>
                <Button text="4" onClick={()=>displayNewDigit(4)}/>
                <Button text="5" onClick={()=>displayNewDigit(5)}/>
                <Button text="6" onClick={()=>displayNewDigit(6)}/>
                <Button text="-" onClick={()=>subtract()}/>
            <div className='row'>
                <Button text="1" onClick={()=>displayNewDigit(1)}/>
                <Button text="2" onClick={()=>displayNewDigit(2)}/>
                <Button text="3" onClick={()=>displayNewDigit(3)}/>
                <Button text="+" onClick={()=>add()}/>
            </div>

            <div className='row'>
                <Button text="+/-" onClick={()=>reverseSign()}/>
                <Button text="0" onClick={()=>displayNewDigit(0)}/>
                <Button text="=" onClick={()=>equals()}/>
            </div>            
        </div>
    );
}

export default Keyboard;
