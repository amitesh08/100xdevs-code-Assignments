

function App() {
  

  return (
    <div>
      <CardWrapper>
        hi there 
      </CardWrapper>
      <CardWrapper>
        hi there from 2nd card 
      </CardWrapper>
    </div>
  )
}

function CardWrapper({children}){


  return (
    <div style={{border: "2px solid black"}}>
      {children}
    </div>
  )
}

function TextComponent(){

  return (
    <div >
      Hi there!
    </div>
  )
}

export default App
