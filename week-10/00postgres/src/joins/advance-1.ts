import { getClient } from "../utils";


async function getUserAndTodosWithJoin(userId: number){
    const client = await getClient();
    //this query will give you join result of todos and people table which having same userId.
    //this will make sure every user comes atleast once.
    const joinQuery = `
        select people.*, todos.title, todos.description, todos.done 
        from people 
        left join todos on people.id = todos.user_id 
        where people.id = $1
    `;
    //right join - 
    //full join - 

    let res = await client.query(joinQuery, [userId])
    const result = res.rows;

    console.log("user and todos: " , result) 

}

getUserAndTodosWithJoin(3);