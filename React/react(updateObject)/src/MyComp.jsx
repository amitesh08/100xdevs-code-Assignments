import { useState } from "react";

export default function MyComp(){

    const[bike, setBike] = useState({year:"2024", make:"royal enfield", model:"gt650"});

    function yearChange(event){
        setBike({...bike , year: event.target.value}); // ...bike - spread operator to make a copy of a object
    }

    function makeChange(event){
        setBike({...bike , make: event.target.value});
    }
    
    function modelChange(event){
        setBike({...bike , model: event.target.value});
    }
    
    
    return (
    <>
        <h2>My favorite Bike is: {bike.year} {bike.make} {bike.model}</h2>

        <input type="number" onChange={yearChange} value={bike.year}/>
        <input type="text" onChange={makeChange} value={bike.make}/>
        <input type="text" onChange={modelChange} value={bike.model}/>

    </>
    )

}