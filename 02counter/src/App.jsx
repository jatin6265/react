import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter=5

  const addValue = () => {
    //  counter=counter+1;
    if(20 > counter){setCounter(counter + 1);}
    // setCounter(counter + 1);
  }

  const removeValue = () => {
    //  counter=counter-1;
    if(0 < counter){setCounter(counter - 1);}
    // setCounter(counter - 1);
  }

  return (
    <>
      <h1>Chai aur react </h1>
      <h2>Counter value: {counter}</h2>

      <button
        onClick={addValue}>Add value {counter}</button>
      <br />
      <button
      onClick={removeValue}>Remove value {counter}</button>
    </>
  )
}

export default App
