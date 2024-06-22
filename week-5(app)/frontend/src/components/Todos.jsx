export function Todos({todos}){
    //to render all the existing Todos 
    return <div>
            {todos.map(function(todo){
                return  <div>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed == true ? "Completed" : "mark as completed"}</button>

                </div>
            })}
    </div>
}