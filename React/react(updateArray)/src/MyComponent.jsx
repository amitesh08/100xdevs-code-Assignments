import { useState } from "react";

export default function MyComponent(){
    const [foods, setFoods]= useState(["apple","mango","banana"])

    function addFood(){
        const newFood = document.getElementById("foodInput").value;
        document.getElementById("foodInput").value = "";

        setFoods([...foods, newFood]);
    }

    function removeFood(index){
        setFoods(foods.filter((element, i )=> i != index)
        )
    }
    return (
        <div>
            <h2>list of Food</h2>
            <ul>
                {foods.map((food,index) => 
                <li key={index} onClick={()=> removeFood(index)}> {food} </li>)}
            </ul>
            <input type="text" id="foodInput" placeholder="enter the food name" />
            <button onClick={addFood}>Add food Item</button>

        </div>
    )
}