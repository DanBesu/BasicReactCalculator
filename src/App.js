import React, { useState, useEffect } from 'react'
import Keyboard from './components/Keyboard'
import Screen from './components/Screen'
import './App.css'

function App() {

  const [operand1, setOperand1] = useState(0); 
  const [operand2, setOperand2] = useState(null);
  const [screenText, setScreenText] = useState('0');
  const [operation, setOperation] = useState('');
  const [status, setStatus] = useState(1); // 1 - equal(end of operation, work with operand1), 2 - operation open (work with operand2) 
  // let status = 1;  

  useEffect( ()=> {
    if(status === 1){
      setScreenText(`${operand1}`);
    }
  }, [operand1, status])

  useEffect( ()=> {
    if(status === 2 && operand2 !== null){
      setScreenText(`${operand2}`);
    }
  }, [operand2])

  useEffect( ()=> {
    setScreenText(`${operation}`);
  }, [operation])

  const displayNewDigit = (newDigit) => {
    if(status === 1){
      setOperand1(operand1 * 10 + newDigit)
    }
    if(status === 2){
      if(operand2 === null)
        setOperand2(newDigit)
      else
        setOperand2(operand2 * 10 + newDigit)
    }
  }

  const equals = () => {
    if(operation === '+'){
      setStatus(1)
      setOperand1(operand1 + operand2)
      setOperand2(null)
    }
    else if(operation === '-'){
      setStatus(1)
      setOperand1(operand1 - operand2)
      setOperand2(null)
    }
    else if(operation === '*'){
      setStatus(1)
      if(operand2 !== null)
        setOperand1(operand1 * operand2)
      setOperand2(null)
    }
    else if(operation === '/'){
      setStatus(1)
      if(operand2 !== null)
        setOperand1(Math.floor(operand1 / operand2))
      setOperand2(null)
    }
  }

  const add = () => {
    setOperation('+');
    setStatus(2);
    setOperand1(operand1 + operand2);
    setOperand2(null);
  }

  const subtract = () => {
    setOperation('-');
    setStatus(2);
    setOperand1(operand1 - operand2);
    setOperand2(null);
  }

  const multiply = () => {
    setOperation('*');
    setStatus(2);
    if(operand2 !== null)
      setOperand1(operand1 * operand2);
    setOperand2(null);
  }

  const divide = () => {
    setOperation('/');
    setStatus(2);
    if(operand2 !== null)
      setOperand1(operand1 / operand2);
    setOperand2(null);
  }

  const reverseSign = () => status === 1 ? setOperand1(operand1 * -1) : setOperand2(operand2 * -1)

  const reset = () => {setOperand2(null); setOperand1(0); setOperation('')}

  const del = () => status === 1 ? setOperand1((operand1 - operand1 % 10)/10) : setOperand2((operand2 - operand2 % 10)/10)

  const powerTwo = () => status === 1 ? setOperand1(operand1 ** 2) : setOperand2(operand2 ** 2)

  return (
    
    <div className='center'>
      <h1 className='f1'> Here we have a Calculator </h1>
      <Screen text={screenText}/>
      <Keyboard 
        displayNewDigit={displayNewDigit}
        del={del}
        reverseSign={reverseSign}
        reset={reset}
        equals={equals}
        powerTwo={powerTwo}
        add={add}
        subtract={subtract}
        multiply={multiply}
        divide={divide}
      />
    </div>
  );
}

export default App;
