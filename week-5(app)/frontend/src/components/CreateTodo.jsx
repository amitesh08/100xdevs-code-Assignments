import { useState } from "react";

//to create new todos 
export function CreateTodo(){
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return (
    <div>
        <input id="tit" style={{
            padding:10,
            margin:10
            }} type="text" placeholder="Title" onChange={function(e){
                const value = e.target.value;
                setTitle(e.target.value);
            }}></input><br />
        
        <input id="des" style={{
            padding:10,
            margin:10
            }} type="text" placeholder="Description" onChange={function(e){
                const value = e.target.value;
                setDescription(e.target.value);
            }}></input><br />

        <button style={{
            padding:10,
            margin:10
            }} onClick={()=>{
                fetch("http://localhost:3000/todo", {  //it will add the new todo to DB
                    method: "POST",
                    body: JSON.stringify({
                        title: title,
                        description: description
                    }),
                    headers: {
                        "Content-type": "application/json"
                    }
                })
                    .then(async function(res){
                        const json = await res.json();
                        alert("todo added");
                    })
            }}>Add a Todo</button>
    </div>
    )
}

