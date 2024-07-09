// import Header from "./Header"
import { useState } from "react";
import { memo } from "react"; 

function App() {
  const [title, setTitle]= useState("my name is amitesh1");
  
  function titleChange(){
    setTitle("my name is " + Math.random()); 
  }
  
  return (
    <div>  
      {/* <HeaderWithbutton/>  -- solution 1 */}

      <button onClick={titleChange}>click to change title </button>
      <Header title={title}/>
      <Header title=" my name is amitesh2"/>
      <Header title=" my name is amitesh2"/>
    </div>
  )
}

/*  solution 1 to minimize the re rendering of the app component 
function HeaderWithbutton(){
  const [title, setTitle]= useState("my name is amitesh1");
  
  function titleChange(){
    setTitle("my name is " + Math.random()); 
  }
  return (
    <div>
      <button onClick={titleChange}>click to change title </button>
      <Header title={title}/>
    </div>
  )
}

function Header({title}){  //{title} more cleaner way..

    return (
        <div>
            {title}
        </div>
    )
}
*/

//solution 2 -- memo in react 

const Header = memo(function Header({title}){  // we are just wrapping it in memo 

  return (
      <div>
          {title}
      </div>
  )
})

export default App
