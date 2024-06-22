const mongoose = require("mongoose");
const { string, boolean } = require("zod");
//mongodb+srv://admin:amitesh123@cluster0.2idz5qj.mongodb.net/

mongoose.connect("mongodb+srv://admin:amitesh123@cluster0.2idz5qj.mongodb.net/todos");

//providing Schemas to DB 
const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema);

module.exports = {
    todo
}