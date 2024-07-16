import { useCallback, useEffect, useState, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [isNumber, setIsNumber] = useState(false);
  const [isCharacter, setIsCharacter] = useState(false);
  const [password, setPassword] = useState("");

  const passwordRef = useRef()  //useRef()- to give you the reference of any element to modify it 

  const copyPassword = useCallback(()=>{
    passwordRef.current.select()  //to select the text when copied 
    window.navigator.clipboard.writeText(password)   //to copy element in clipboard
  },[password])

  
  //useCallback()- to memorize the function 
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(isNumber) str += "0123456789"
    if(isCharacter) str += "!\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char);
      
    }

    setPassword(pass)

  },[length,isNumber,isCharacter,setPassword])

  //useEffect()- rerun if the dependencies changes
  useEffect(()=>{
    passwordGenerator()
  },[length,isNumber,isCharacter,passwordGenerator])

  return (
    <>
        <div className="display">
            <h1>Password Generator</h1>
            <div className="inner-display">
                <input
                    type="text"
                    value={password}
                    className="input-display"
                    placeholder="Password"
                    ref={passwordRef}
                    
                />
                <button onClick={copyPassword}>Copy</button>
            </div>
            <div className="inputs">
              <div className="range">
                <input type= "range"
                       min={6}
                       max={100}
                       value={length}
                       onChange={(event)=> setLength(event.target.value)}
                />
                <label>Length: {length}</label>
              </div>
              <div className="checkbox">
                <input type="checkbox"
                       defaultChecked = {isNumber}
                       id="numberInput"
                       onChange={()=> {
                        setIsNumber((prev)=> !prev)
                       }}
                />
                <label>Numbers</label>
              </div>
              <div className="checkbox">
                <input type="checkbox"
                       defaultChecked = {isCharacter}
                       id="characterInput"
                       onChange={()=> {
                        setIsCharacter((prev)=> !prev)
                       }}
                />
                <label>Characters</label>
              </div>

            </div>
        </div>
    </>
);
}

export default App
