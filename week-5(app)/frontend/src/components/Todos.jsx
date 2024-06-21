export function Todos({todos}){
    //return all the div
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