
//drop - it is used to delete a table from database.
//usually you don't create such files like (create or delete/drop) to del data and table 
//you have to do it raw from the terminal only.

import { getClient } from "./utils";

async function deleteTable(table: string){
    const client = await getClient();
    const dropQuery = `
        DROP TABLE IF EXISTS ${table}
    `;

    await client.query(dropQuery);

    console.log(`table ${table} has been deleted.`)

}
const tableName = "users"
deleteTable(tableName)