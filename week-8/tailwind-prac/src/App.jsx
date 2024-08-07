import { useState } from 'react'

function App() {

  return (
    <>
      <div className='grid grid-cols-5'>
        <div className='bg-blue-500'>DIV1</div>
        <div className='bg-red-500'>DIV2</div>
        <div className='bg-yellow-500'>DIV3</div>
      </div>
      <div className='bg-blue-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4'>
        <div className='bg-blue-500'>DIV1</div>
        <div className='bg-red-500'>DIV2</div>
        <div className='bg-yellow-500'>DIV3</div>
        </div>
    </>
  )
}

export default App
