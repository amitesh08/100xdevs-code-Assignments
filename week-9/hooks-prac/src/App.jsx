
import React, { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios';
import useIsOnline from './hooks/useIsOnline';
import useInterval from './hooks/useInterval';
import useDebounce from './hooks/useDebounce';

function App (){
  const [inputValue, setInputValue] = useState('');
  const debouncedValue = useDebounce(inputValue, 500); // 500 milliseconds debounce delay

  // Use the debouncedValue in your component logic, e.g., trigger a search API call via a useEffect
  // useEffect(()=>{
  //   fetch("")
  // },[debouncedValue])


  return (
    <>
    "debounce value is {debouncedValue}"
    <br></br>
    <input
      type="text"
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      placeholder="Search..."
    />
    </>
  );
}

/*-------------------------------------------------------------
function App() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount(c => c + 1);
  }, 1000)

  return (
    <>
      Timer is at {count}
    </>
  )
}
/*-------------------------------------------------------------------
function App(){
  const isOnline = useIsOnline();

  return(
    <div>
      {isOnline ? "user is online " : "user is offline"}
    </div>
  )
}



/* ------------------------------------------------------------------------------*/
// function App() {
  //   const [todos, setTodos] = useState([])
  
//   useEffect(() => {
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(res => {
//         setTodos(res.data.todos);
//       })
//   }, [])
      
//   return (
//     <>
 //       {todos.map(todo => <Track todo={todo} />)}
 //     </>
 //   )
 // }
// function Track({ todo }) {
//   return <div>
//     {todo.title}
//     <br />
//     {todo.description}
//   </div>
 // }
          
/* ------------------------------------------------------------------------------*/

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
