import { useContext, useState } from 'react'
import { CountContext } from './Context'


function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <CountContext.Provider value={{count, setCount}}>
        <Count /> 
      </CountContext.Provider>
    </div>
  )
}

function Count() {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const {count, setCount} = useContext(CountContext)  
  return <div>
    {count}
  </div>
}

function Buttons(){
  const {count, setCount} = useContext(CountContext) 

  return(
    <div>
      <button onClick={()=>{
        setCount((prevC)=> prevC + 1)
      }}>Incr</button>

      <button onClick={()=>{
        setCount((prevC)=> prevC - 1)
      }}>Dec</button>

      <button onClick={()=>{
        setCount(0)
      }}>Reset</button>
    </div>
  )

}

export default App
