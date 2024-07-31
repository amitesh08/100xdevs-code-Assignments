import { useContext, useState } from 'react'
import { CountContext } from './Context'
import { RecoilRoot, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import { countAtom, evenSelector } from './store/atoms/count';


function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <RecoilRoot>
        <Count /> 
      </RecoilRoot>
    </div>
  )
}

function Count({setCount}) {
  return <div>
    <CountRenderer />
    <Buttons />
  </div>
}

function CountRenderer() {
  const count = useRecoilValue(countAtom)

  return <div>
    <b>{count}</b>
    <EvenCountRenderer />
  </div>
}

function EvenCountRenderer(){
  const isEven = useRecoilValue(evenSelector);
  
  return <div>
    {isEven ? "it is even " : null}
  </div>
}

function Buttons(){
  const setCount = useSetRecoilState(countAtom)

  return(
    <div>
      <button onClick={()=>{
        setCount((c) => c + 1)
      }}>Incr</button>

      <button onClick={()=>{
        setCount((c) => c - 1)
      }}>Dec</button>

      <button onClick={()=>{
        setCount(0)
      }}>Reset</button>
    </div>
  )

}

export default App
