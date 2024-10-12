import { Client } from "pg";
import { getClient } from "./utils";

async function getUsers(){
    const client = await getClient();
    const selectUsersText = `SELECT * FROM people`;  //to get all the users from the people table 
    const userRes = await client.query(selectUsersText);

    console.log("users:");
    for (let user of userRes.rows){  //getting all the users from the response.
        console.log(`Id: ${user.id}, Email: ${user.email}`);
    }
}

async function getUserFromEmail(email:string){
    const client = await getClient();
    const selectUserText = 'SELECT * FROM people WHERE email = $1'; //to get a data of particular user.
    const userRes = await client.query(selectUserText, [email]);

    console.log("single user detail:")
    for (let user of userRes.rows){
        console.log(`Id: ${user.id}, Email: ${user.email}`)
    }
}
async function getTodosForUser(userId: number){
    const client = await getClient();
    const selectTodos = `
        SELECT * FROM todos 
        WHERE user_id = $1
    `
    const todosRes = await client.query(selectTodos, [userId])

    console.log(`todos for User ID ${userId}: `)

    for (let todo of todosRes.rows){
        console.log(`Id: ${todo.id},
            Title: ${todo.title},
            Description: ${todo.description},
            Done: ${todo.done}`)
    }
}

getUsers();
getUserFromEmail("amitesh1@example.com");
getTodosForUser(3);