const express = require("express");
const app = express();

app.get('/health-checkup',(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    //usrname checks
    if(!(username == 'amitesh' && password == 'pass')){
        res.status(400).json({msg : "something is up with the inputs"})
        return
    }
    //input validations
    if (kidneyId != 1 && kidneyId != 2){
        res.status(400).json({msg : "something is up with the inputs"})
        return
    }
    // do something with the kidney
    res.json({
        msg: 'your kidney is fine!'
    })
});

app.get('/replace-kidney',(req,res)=>{
    const username = req.headers.username;
    const password = req.headers.password;
    const kidneyId = req.query.kidneyId;

    //usrname checks
    if(!(username == 'amitesh' && password == 'pass')){
        res.status(400).json({msg : "something is up with the inputs"})
        return
    }
    //input validations
    if (kidneyId != 1 && kidneyId != 2){
        res.status(400).json({msg : "something is up with the inputs"})
        return
    }
    // do something with the kidney replacement logic
    res.json({
        msg: 'your kidney is replaced !'
    })
});

//if you can see above it is violating the coding rule that is don't repeat yourself , 
// where if you hit another get request it again need to verify again and that looks ugly 
//so here comes the MIDDLEWARES in the picture which do the validation thing and then yoou can pass it as a function in the requests 
//refer middlewares.js for the better solution.

app.listen(3000);