import { useState } from 'react'
import { useMemo } from 'react'

function App() {
  

  return (
    <>
      <Counter/>
    </>
  )
}

function Counter(){
  const [count, setCount] = useState(0)
  const [inputValue, setInputValue] = useState(1)

  let counter = useMemo(()=>{
    let finalCounter = 0;
    for (let i = 1; i <= inputValue; i++) {
      finalCounter = finalCounter + i;
    }
    return finalCounter;
  },[inputValue])

  function handleInput(event){
    setInputValue(event.target.value)
  }
  
  function handleCount(){
    setCount(count+1)
  }


  return (
  <div>
    <input onChange={handleInput}></input>
    <h4>sum from 1 to {inputValue} is : {counter}</h4>
    <button onClick={handleCount}>Counter:{count}</button>

  </div>
  )
}

export default App
