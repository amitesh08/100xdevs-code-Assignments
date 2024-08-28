import { useState } from "react"


function App() {
  const [color, setColor]= useState("white");

  return (
    <div className="w-full h-screen duration-200" 
    style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center inset-x-0 bottom-12 px-2 ">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-4 py-3  shadow-xl rounded-3xl">
          <button 
          onClick={()=> setColor("red")}
          className="outline-none rounded-full shadow-lg p-3 "
          style={{backgroundColor: "red"}}>Red</button>
          <button 
          onClick={()=> setColor("yellow")}
          className="outline-none rounded-full shadow-lg p-3 "
          style={{backgroundColor: "yellow"}}>Yellow</button>
          <button
          onClick={()=> setColor("black")}
          className="outline-none rounded-full shadow-lg p-3  text-white"
          style={{backgroundColor: "black"}}>Black</button>
          <button 
          onClick={()=> setColor("purple")}
          className="outline-none rounded-full shadow-lg p-3 "
          style={{backgroundColor: "purple"}}>Purple</button>
          <button 
          onClick={()=> setColor("green")}
          className="outline-none rounded-full shadow-lg p-3 "
          style={{backgroundColor: "green"}}>Green</button>
          <button 
          onClick={()=> setColor("blue")}
          className="outline-none rounded-full shadow-lg p-3 "
          style={{backgroundColor: "blue"}}>Blue</button>
          <button 
          onClick={()=> setColor("white")}
          className="outline-none rounded-full shadow-lg p-3 "
          style={{backgroundColor: "white"}}>Default</button>
        </div>
      </div>
    </div>
  )
}

export default App
