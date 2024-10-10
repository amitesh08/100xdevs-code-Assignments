import { getClient } from "./utils";


async function createTable(){
    const client = await getClient();
    //THIS QUERY WILL CREATE A TABLE NAMED user WHICH CONTAINS ID EMAIL AND PASSWORD
    const createUserTableQuery = `  
        CREATE TABLE people (
            id SERIAL PRIMARY KEY,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL
        );
    `;

    await client.query(createUserTableQuery); //passing the value to query function 

    //THIS QUERY WILL CREATE A TODO TABLE WHICH WILL HAVE THE user(id) FROM user TABLE.
    const createTodosQuery = `
        CREATE TABLE todos (
            id SERIAL PRIMARY KEY,
            title TEXT NOT NULL ,
            description TEXT,
            user_id INTEGER REFERENCES people(id),
            done BOOLEAN DEFAULT FALSE
        );
    `;

    await client.query(createTodosQuery); //passing the query 

    console.log("Table created successfully");

}

createTable();