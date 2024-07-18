import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  let [value,setValue] = useState(5)
  
  
  const addValue = () =>{
    
    if(value  <= 19){
      setValue(value + 1)
    }
  }


  const removeValue = () =>{
    
     if( value > 0){
      setValue(value - 1)
    }
  }
  return (
    <>
        <h1>React Basic</h1>
        <h2>Counter Values {value}</h2>
        <h3>Min Upto = 0 && Max Upto 20</h3>
        <button onClick={addValue}>
          Add Value
        </button>
        <button onClick={removeValue}>
          Remove Value
        </button>    
      
    </>
  )
}

export default App
