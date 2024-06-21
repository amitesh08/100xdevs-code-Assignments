//all the zod inputs from user
const zod = require("zod");
/*
    {
    title: string,
    description: string 
    }
    {
    id:string
    }

*/

const createTodo = zod.object({
    title: zod.string(),
    description: zod.string()
})

const updateTodo = zod.object({
    id: zod.string(),
})


//to export file to main.js
module.exports = {
    createTodo: createTodo,
    updateTodo: updateTodo
}