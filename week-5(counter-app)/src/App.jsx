import { useState } from "react";

//state, Components 


function App() {

  const [count, setCount]= useState(0);  //state , components

 

  return (
    <div>
      <CustomButton count={count} setCount={setCount}></CustomButton>
      <CustomButton count={count*0} setCount={setCount}></CustomButton>
      <CustomButton count={count} setCount={setCount}></CustomButton>
    </div>
  )
}

function CustomButton(props){

  function clickCounter(){
    props.setCount(props.count+1);
  }

  return (
    <button onClick={clickCounter}>Counter {props.count}</button>
  )
}

export default App
// tst