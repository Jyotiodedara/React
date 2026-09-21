import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5) 


  //let counter = 5

  const addValue = () => {
    //counter = counter + 1
    setCounter(counter + 1)
    console.log("Value added", counter); // extra line if inspect console ma o/p jovu hoy yoh
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
    <h1>Work on React</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value {counter}</button>
    <br />
    <button onClick = {removeValue}>Remove Value {counter}</button>
    <p>Footer: {counter}</p>
    </>
  )
}

export default App
