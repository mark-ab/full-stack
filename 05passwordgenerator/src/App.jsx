import { useCallback, useState, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [numberAllowed, setnumberAllowed] = useState(false)
  const [charAllowed, setcharAllowed] = useState(false)
  const [password, setpassword] = useState('')

  const passwordRef = useRef(null)

  const generatePassword = useCallback(() => {
    let pass = ""
    let str = 
    "QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasddfghjklzxcvbnm"

    if(numberAllowed) str+="1234567890"
    if(charAllowed) str+="!@#$%^&*()+=_-"

    for(let i = 1; i<length;i++){
      const char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char)
    }

    setpassword(pass)
  }, [length,numberAllowed,charAllowed])

  const copyPasswordToClipboard = () => {
    window.navigator.clipboard.writeText(password)
    passwordRef.current?.select()
    
  }

  useEffect(() => {
      generatePassword()
  }, [length, numberAllowed, charAllowed])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-md px-5 py -5 my-8 bg-slate-300 text-gray-700'>
      <h1 className='text-neutral-700 text-center my-3'> Password Generator</h1>
      <div className='flex shadow rounded-xl overflow-hidden mb-4'>
        <input
        type='text'
        value={password}
        className='outline-double w-full py-1 px-3'
        placeholder='password'
        readOnly
        ref={passwordRef}
        />
        <button
        onClick={copyPasswordToClipboard}
        className='outline-none bg-orange-500 text-white px-3 py-0.5 shrink-0'
        >Copy
        </button>
      </div>
      <div
      className='flex text-sm gap-x-2'
      >
        <div className='flex items-center gap-x-1'>
          <input
          type='range'
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => setlength(e.target.value)}
          name=''
          id=''
          />
          <label htmlFor="length">Length: {length}</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={numberAllowed}
          onChange={() => {
            setnumberAllowed((prev) => !prev)
          }}
          name=""
          id=""
          />
          <label htmlFor='number'>Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
          type='checkbox'
          defaultChecked={charAllowed}
          onChange={() => {
            setcharAllowed((prev) => !prev)
          }}
          name=""
          id=""
          />
          <label htmlFor='charInput'>Character</label>
        </div>
      </div>
    </div>
    </>
  )
}

export default App
