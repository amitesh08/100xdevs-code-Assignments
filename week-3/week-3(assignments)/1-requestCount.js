const express = require("express")
const app = express();

// You have been given an express server which has a few endpoints.
// Your task is to create a global middleware (app.use) which will
// maintain a count of the number of requests made to the server in the global
// requestCount variable
let counter = 0;
app.use((req,res,next)=>{
    counter++;
    next()
})

app.get('/',(req,res)=>{
    res.json({ name: "amitesh" })
})

app.get('/',(req,res)=>{
    res.json({ name: "amitesh"})
})

app.get('/requestCount',(req,res)=>{
    res.json({counter})
})

app.listen(3001)