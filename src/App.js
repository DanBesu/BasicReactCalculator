import React from 'react'
import Keyboard from './components/Keyboard'
import Screen from './components/Screen'

function App() {
  return (
    
    <div>
      <h1 className='f1'> Here we have a Calculator </h1>
      <Screen/>
      <Keyboard/>
    </div>
    
    // here come the components
  );
}

export default App;

/*
Components

-Keyboard (keeps all the buttons)

- Button - has onClick function for 
    - numbers
      * change the screen,
        making the current nr bigger 
    - operations
        * changes the screen only with the sign
        * the first number is remembered
    - delete

- Screen (gets the content from the keyboard)

*/
