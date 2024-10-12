import { getClient } from "./utils";

async function deleteUser(userId: number ){
    const client = await getClient();
    // this query will delete the user with id 
    const deleteUserText = `
        DELETE FROM people 
        WHERE  id = $1
    `;
    const userValue = [
        userId
    ]

    await client.query(deleteUserText, userValue);

    console.log(`user id: ${userId} has been deleted.`)
}

async function deleteTodo(todoId: number){
    const client = await getClient();
    //this query will delete todo with id 
    const deleteTodoText = `
        DELETE FROM todos 
        WHERE id = $1
    `;
    const todoValue = [
        todoId
    ]

    await client.query(deleteTodoText, todoValue)

    console.log(`todo id: ${todoId} has been deleted. `)

}

deleteTodo(4)
deleteUser(1)