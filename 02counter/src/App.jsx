import { useState } from 'react'
import './App.css'
// learning abt state how state help in updating in UI
function App() {

const [counter, setCounter]= useState(0)
  //let counter = 1

const addValue = () => {
 // setCounter(counter + 1)
//batching example below
  setCounter((prevCounter) => prevCounter + 1)
  setCounter((prevCounter) => prevCounter + 1)
  setCounter((prevCounter) => prevCounter + 1)
  setCounter((prevCounter) => prevCounter + 1)


}

const removeValue = () => {
  setCounter(counter - 1)
}

  return (
    <>
    <h1> React learning {counter} </h1>
    <h2> counter value: {counter} </h2>
    <button
    onClick={addValue}>Add value</button> {" "}
    <button
    onClick={removeValue}>Remove value</button>
    <p>footer: {counter} </p>
    </>
  )
}

export default App
