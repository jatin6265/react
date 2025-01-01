import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card.jsx'

function App() {
  let myObj = {
    username: 'jatin chouhan',
    age: 21,
  }
  let newArr=[1,2,3,4,5,6]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5'>
        Tailwind test
      </h1>
      <Card username='Priyanshu Chouhan'  channel="chai aur code" someObj={myObj} someArr={newArr}/>
      <Card username='Jatin chouhan' btnText="visit me"/>
    </>

  )
}

export default App
