import React, { useState } from 'react'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <div className="w-full h-screen duration-200"
        style={{
          backgroundColor: color
        }}
      > <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
          <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
            <button className='bg-red-500 outline-none  px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('#ef4444')}>Red</button>
            <button className='bg-green-500 outline-none  px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('#22c55e')}>Green</button>
            <button className='bg-pink-500 outline-none  px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('#ec4899')}>Pink</button>
            <button className='bg-yellow-500 outline-none  px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('#eab308')}>Yellow</button>
            <button className='bg-blue-500 outline-none  px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('#3b82f6')}>Blue</button>
            <button className='bg-purple-500 outline-none  px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('#a855f7')}>Purple</button>
            <button className='bg-cyan-500 outline-none  px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('#06b6d4')}>Cyan</button>
            <button className='bg-indigo-500 outline-none  px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('#6366f1')}>Indigo</button>
            <button className='bg-orange-500 outline-none  px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('#f97316')}>Orange</button>
            <button className='bg-amber-500 outline-none  px-4 py-1 rounded-full text-white shadow-lg' onClick={() => setColor('#f59e0b')}>Amber</button>
                 
          </div>

        </div>
      </div>

    </>
  )
}

export default App
