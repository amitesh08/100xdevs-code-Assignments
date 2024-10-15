import { getClient } from "../utils";


async function getUserAndTodosWithJoin(userId: number){
    const client = await getClient();
    //this query will give you join result of todos and people table which having same userId.
    //this should not return a row if no todos exist for the user.
    const joinQuery = `
        select people.*, todos.title, todos.description, todos.done 
        from people 
        join todos on people.id = todos.user_id 
        where people.id = $1
    `;
    //inner join - is the default join.

    let res = await client.query(joinQuery, [userId])
    const result = res.rows;

    console.log("user and todos: " , result) 

}

getUserAndTodosWithJoin(3);