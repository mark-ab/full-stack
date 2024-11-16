import { useState } from 'react'
import './App.css'

function App() {

  const[color, setcolor] = useState('olive')
//onclick doesn't change the value it returned from the function it needs function itself

  function changeColor(color){
    setcolor(color)
  }

  return (
    <div className='w-screen h-screen duration-1000' style={{backgroundColor: color}}>
      <div className='fixed flex flex-wrap justify-center bottom-5 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
          <button
            onClick={() => changeColor('gray')}
           className='outline-none px-4 py-1 rounded-full shadow-md  bg-gray-500 text-white'>
            gray
           </button>
           <button
           onClick={() => setcolor('green')}
           className='outline-none px-4 py-1 rounded-full shadow-md bg-green-500 text-white'>
            green
           </button>
           <button
           onClick={() => changeColor('orange')}
           className='outline-none px-4 py-1 rounded-full shadow-md bg-orange-500 text-white'>
           orange
           </button>
           <button
           onClick={() => changeColor('purple')}
           className='outline-none px-4 py-1 rounded-full shadow-md bg-purple-500 text-white'>
            purple
           </button>
           <button
           onClick={() => changeColor('blue')}
           className='outline-none px-4 py-1 rounded-full shadow-md bg-blue-500 text-white'>
            Blue
           </button>
        </div>
      </div>
    </div>
  )
}

export default App
