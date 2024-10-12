import { getClient } from "./utils";


async function insertData(){
    const client = await getClient();
    //this query will insert the data in people table 
    const insertUserText = `
        INSERT INTO people (
            email,
           password 
        )
        VALUES (
           $1,
           $2 
        )
        RETURNING id
    `;
    // RETURNING id - it will return only the user ID
    //RETURNING * - it will return the all value , you can pass whatever u want to return email,pass,id etc
    /* why do we separate values like this we can also write like this (below) instead of using $1 $2
            VALUES (AMITESH@GAMIL.COM, HASHED_PASS) 

        because to prevent it from SQL injection in which any one can pass queries in the values eg-
            VALUES (amitesh; DROP TABLE users)
            which eventually will del your users table which is not good .
    */
    const userValues = [`amitesh2@example.com`, `hashed_pass_here`];

    let response = await client.query(insertUserText,userValues);

    //this query will put data in todos table 
    const insertTodosText = `
        INSERT INTO todos (
            title,
            description,
            user_id,
            done
        )
        VALUES (
            $1,
            $2,
            $3,
            $4
        )
        RETURNING id
    `;
    const todosValues = [
        'study',
        'learn about postgres2',
        response.rows[0].id,
        false
    ];
    await client.query(insertTodosText, todosValues);

    console.log("inserted data successfully");
}
//response.rows[0].id, - to grab user_id

insertData();