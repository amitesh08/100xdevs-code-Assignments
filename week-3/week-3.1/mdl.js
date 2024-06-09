const express = require("express");

const app = express();

//middleware that checks age should be greater than 14
function ageChecker(req,res,next){
    const age = req.query.age;
    if(age>=14){
        next();
    }
    else{
        res.json({
            msg:"you are not eligible for the ride"
    })
}}

app.use(ageChecker);

app.get('/ride1',ageChecker,(req,res)=>{
    res.json({
        msg: "you have successfully rode the 1st ride."
    })
})

app.get('/ride2',ageChecker, (req,res)=>{
    res.json({
        msg: "you have successfully rode the 2nd ride."
    })
})
app.listen(3000);