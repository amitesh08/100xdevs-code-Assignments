import { getClient } from "./utils";


async function updateTodo(todoId: number){
    const client = await getClient();
    //this query will update the existing query.
    const updateTodoText = `
        UPDATE todos
        SET done = $1 
        WHERE id = $2
        `;
    const todoValues = [
        true,
        todoId
    ]
    await client.query(updateTodoText, todoValues);

    console.log(`todo with ID ${todoId} updated to done!`)
}

const todoIdToUpdate = 1;
updateTodo(todoIdToUpdate);