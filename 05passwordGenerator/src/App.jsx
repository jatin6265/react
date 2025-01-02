import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'
import { set } from 'mongoose'

function App() {
  const [length, setLength] = useState(8)
  const [hasNummber, setHasNumber] = useState(false)
  const [hasSymbol, setHasSymbol] = useState(false)
  const [password, setPassword] = useState('myPassword')

  //useref hook
  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let num = "0123456789"
    let sym = "!@#$%^&*()_+";
    if (hasNummber) str += num;
    if (hasSymbol) str += sym;
    for (let i = 0; i < length; i++) {
      pass += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
    setPassword(pass);
  }, [length, hasNummber, hasSymbol, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();
    passwordRef.current?.setSelectionRange(0, 100);
    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(() => { passwordGenerator() }, [length, hasNummber, hasSymbol, passwordGenerator])
  return (
    <>
      <div className='w-full max-w-md  max-auto shadow-md rounded-lg px-4 py-4 my-8  bg-blue-800'>
        <h1 className='text-center text-2xl text-white my-4'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input
            type="text"
            value={password}
            className='outline-none  py-1 px-3 w-full text-gray-600'
            placeholder='password'
            readOnly
            ref={passwordRef}
          />
          <button
            className='outline-none  py-1  px-3  bg-blue-500 text-white'
            onClick={copyPasswordToClipboard}
          >copy</button>
        </div>
        <div className='gap-x-2  text-sm flex'>
          <div className='flex items-center gap-x-1 text-white'>
            <input type="range"
              onChange={(e) => setLength(e.target.value)}
              min={8}
              max={100}
              value={length}
              className='cursor-pointer ' />
            <label htmlFor="">Length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1 text-white'>
            <input type="checkbox"
              onChange={(e) => setHasSymbol(e.target.checked)}
              className='cursor-pointer ' />
            <label >Symbols</label>
          </div>
          <div className='flex  items-center gap-x-1 text-white'>
            <input type="checkbox"
              onChange={(e) => setHasNumber(e.target.checked)}
              className='cursor-pointer ' />
            <label >Numbers</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
