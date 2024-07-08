// updater Function - A function that passes as an argument in setState() 
//                    ex- setState(arrowFunction)


import { useState } from "react";

export default function MyComponent(){
    const [count, setCount] = useState(0)

    function Increment(){
        setCount(c => c + 1); // here c denotes the previous value use initial of state variable or prevCount
    }

    function Reset(){
        setCount(0);
    }

    function Decrement(){
        setCount(c => c - 1);
    }

    return (
        <>
            <h2>Count: {count}</h2>
            <button onClick={Increment} className="increment">Increment</button>
            <button onClick={Reset} className="reset">Reset</button>
            <button onClick={Decrement} className="decrement">Decrement</button>
        </>
    )
}