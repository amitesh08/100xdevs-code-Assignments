
import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';


function App() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
      })
  }, [])

  return (
    <>
      {todos.map(todo => <Track todo={todo} />)}
    </>
  )
}

function Track({ todo }) {
  return <div>
    {todo.title}
    <br />
    {todo.description}
  </div>
}

// function App() {
//   const [render , setRender] = useState(true);

//   useEffect(()=>{
//     setInterval(()=>{
//       setRender(r => !r)
//     },5000)
//   },[])

//   return (
//     <>
//       {render ? <MyComponent /> : <div></div>}
//     </>
//   )
// }

// function MyComponent() {
//   useEffect(() => {
//     // Perform setup or data fetching here
//     console.error("component mounted")
    
//     return () => {
//       // Cleanup code (similar to componentWillUnmount)
//       console.log("component unmounted")
//     };
//   }, []);

//   return (
//     <div>
//       hi inside from component
//     </div>
//   )

//   // Render UI
// }

export default App
