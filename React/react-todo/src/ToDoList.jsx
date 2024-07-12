import { useState } from "react";

export default function ToDoList(){
    const [tasks, setTasks]= useState([]);
    const [newTask, setNewTask]= useState("");

    function inputChange(event){
        setNewTask(event.target.value);

    }

    function addTask(){
        if(newTask.trim() !== ""){
            setTasks(t=> [...t, newTask]);
            setNewTask("") 
        }

    }

    function removeTask(index){
        const updatedTask = tasks.filter((_,i)=> i !== index)
        setTasks(updatedTask)
    }

    function moveTaskUp(index){
        if (index >0){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index-1]] =
            [updatedTask[index-1], updatedTask[index]]
            setTasks(updatedTask);
        }
    }

    function moveTaskDown(index){
        if (index < tasks.length-1){
            const updatedTask = [...tasks];
            [updatedTask[index], updatedTask[index+1]] =
            [updatedTask[index+1], updatedTask[index]]
            setTasks(updatedTask);
        }
    }
    
    return(
        <div>
            <div className="to-do-list">
                <h1 className="heading">To-DO List</h1>

                <div className="display-todo">
                    <input type="text" value={newTask} placeholder="Enter a New Task" onChange={inputChange}/>
                    <button className="add-button" onClick={addTask}>ADD TASK</button>
                </div>
            </div>
            <div className="lists">
                <ol>
                    {tasks.map((task,index)=>
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-button" onClick={() => removeTask(index)}>❌</button>
                            <button className="move-button" onClick={() => moveTaskUp(index)}>🔼</button>
                            <button className="move-button" onClick={() => moveTaskDown(index)}>🔽</button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    )
}