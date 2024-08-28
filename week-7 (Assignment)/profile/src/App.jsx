import { useState } from 'react'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  
  return (
    <>
      <h1 className='bg-gray-400 text-black p-4 rounded-lg mb-4'>Hi there </h1>
      <Card name="Amitesh" btnTxt="Click me"></Card> 
      <Card name="amit" btnTxt="visit me"/>
    </>
  )
}

export default App
