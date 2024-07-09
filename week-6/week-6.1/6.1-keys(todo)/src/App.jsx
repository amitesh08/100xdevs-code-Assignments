import { useState } from 'react';


let counter = 4;
function App() {
  const [todos, setTodos]= useState([{
    id: 1,
    title:"got to gym ", 
    description: " gym at 8am"
  },{
    id:2,
    title:"100xdevs lecture", 
    description: " complete week6.1"
  },{
    id:3,
    title:"practice DSA",
    description: "solve 2 questions of Array"
  }])

  function addTodo(){

    setTodos([...todos, {
      id:counter++,
      title: "ex",
      description: "eg"
    }]);
  }

  return (
    <div>
      <button onClick={addTodo}>Add New Todo</button>
      {todos.map((todo)=>{
        return <ToDo key={todo.id} title = {todo.title} description = {todo.description}/>
      })}
    </div>
  )
}

function ToDo({title,description}){

  return (
    <div>
      <h1>{title}</h1>
      <h5>{description}</h5>
    </div>
  )
}

export default App
