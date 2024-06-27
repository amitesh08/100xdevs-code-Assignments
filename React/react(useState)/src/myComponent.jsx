import { useState } from "react";

export default function MyComponent(){
    const [name, setName]= useState("Guest");
    const [age, setAge] = useState(0);
    const [isEmployed, setIsEmployed] = useState(false)

    const updateName = ()=> {
        setName("amitesh");
    }

    const incrAge = ()=>{
        setAge(age+1);
    }

    const toggle = ()=>{
        setIsEmployed(!isEmployed)
    }

    return(
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>
            <p>Age: {age}</p>
            <button onClick={incrAge}>Set Age</button>
            <p>employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggle}>toggle</button>
        </div>
    )

}