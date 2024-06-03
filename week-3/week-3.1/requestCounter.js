//count the number of request.

const express = require('express');
const app = express();

// creating a Middleware function to count the request everytime it hit 
let counter = 0;
function requestCount(req,res,next){
    counter++;
    console.log(counter);
    next();
}

app.get('/counter',requestCount,(req,res)=>{
    res.send("everything is fine");
})

app.listen(3000);