const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const cors = require("cors");


const app = express();

app.use(express.json()); //to parse body 

app.use(cors());   //to avoid cors error


//to create new Todo
app.post("/todo",async(req,res)=>{
    const createPayload = req.body;
    const parsedPayload = createTodo.safeParse(createPayload);

    if (!parsedPayload.success){
        res.status(404).json({
            msg: " you sent the wrong inputs"
        })
        return ;
    }
    //put it in mongoDb
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })

    res.json ({
        msg: "Todo Created "
    })

})

//to get all the added Todos
app.get("/todos", async (req,res)=>{
    //get the todos from the database 
    const todos = await todo.find({}); // await data to come back to user
    res.json({
        todos
    })
})

//to update the todo as completed 
app.put("/completed",async(req,res)=>{
    const updatePayload = req.body;
    const parsedPayload = updateTodo.safeParse(updatePayload);
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "inputs were incorrect"
        })
        return 
    }
    //update the mongoDB
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})


app.listen(3000);