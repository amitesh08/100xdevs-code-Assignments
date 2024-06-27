import { useState } from "react";

export default function Counter(){
    const [count , setCount]= useState(0)

    const incrCount = ()=>{
        setCount(count+1);
    }

    const resetCount = ()=>{
        setCount(count*0);
    }

    const decrCount = ()=>{
        setCount(count-1);
    }


    return (
        <>
            <div className="count">
                <p className="count-display">{count}</p>
                <button onClick={incrCount} className="increment">Increment</button>
                <button onClick={resetCount} className="reset">Reset</button>
                <button onClick={decrCount} className="decrement">Decrement</button>
                </div>
        </>
    )
}