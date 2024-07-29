import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Landing from './components/Landing'
import Dashboard from './components/Dashboard'
import React from 'react'

function App() {

  return (
    <BrowserRouter>
    <Routes>
        <Route path="/dashboard" element ={<Dashboard/>} />
        <Route path="/" element ={<Landing/>} />
    </Routes>
    
    </BrowserRouter>
  )
}

export default App
