import { Client } from "pg";
import { connectionString } from "./connectionString";


export async function getClient(){
    const client = new Client(connectionString);  //it will connect to postgres 
    await client.connect();
    return client ;
}