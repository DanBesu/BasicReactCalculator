import React, { useState, useEffect } from 'react'
import Keyboard from './components/Keyboard'
import Screen from './components/Screen'
import './App.css'

function App() {

  const [operand1, setOperand1] = useState(0); 
  const [operand2, setOperand2] = useState(null);
  const [screenText, setScreenText] = useState('0');
  const [operation, setOperation] = useState('=');

  useEffect( ()=> {
    if(operation === '='){
      setScreenText(`${operand1}`);
    }
  }, [operand1, operation])

  useEffect( ()=> {
    if(operation !== '=' && operand2 !== null){
      setScreenText(`${operand2}`);
    }
  }, [operand2, operation])

  useEffect( ()=> {
    if(operation !== '=')
      setScreenText(`${operation}`);
  }, [operation])

  const displayNewDigit = (newDigit) => {
    if(operation === '='){
      setOperand1(operand1 * 10 + newDigit)
    }
    if(operation !== '='){      
      setOperand2((operand2 || 0) * 10 + newDigit) 
    }
  }

  const equals = () => {
    switch (operation){
      case '+':{
        setOperand1(operand1 + operand2)
        break;
      }
      case '-':{
        setOperand1(operand1 - operand2)
        break;
      }
      case '*':{
        if(operand2 !== null)
          setOperand1(operand1 * operand2)
        break;
      }
      case '/':{
        if(operand2 !== null)
          setOperand1(Math.floor(operand1 / operand2))
        break;
      }
      default:
        break;
    }
    setOperand2(null)
    setOperation('=')
  }

  const add = () => {
    setOperation('+');
    setOperand1(operand1 + operand2);
    setOperand2(null);
  }

  const subtract = () => {
    setOperation('-');
    setOperand1(operand1 - operand2);
    setOperand2(null);
  }

  const multiply = () => {
    setOperation('*');
    if(operand2 !== null)
      setOperand1(operand1 * operand2);
    setOperand2(null);
  }

  const divide = () => {
    setOperation('/');
    if(operand2 !== null)
      setOperand1(operand1 / operand2);
    setOperand2(null);
  }

  const reverseSign = () => operation === '=' ? setOperand1(operand1 * -1) : setOperand2(operand2 * -1)

  const reset = () => {
    setOperand2(null); 
    setOperand1(0); 
    setOperation('')
  }

  const del = () => operation === '=' ? setOperand1(Math.floor(operand1/10)) : setOperand2(Math.floor(operand2/10))

  const powerTwo = () => operation === '=' ? setOperand1(operand1 ** 2) : setOperand2(operand2 ** 2)

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
