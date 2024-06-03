const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const todo = [{
    title: "study",
    description: "study for 2 hours"
},{
    title: "project",
    description: "work on project"
}]
  
app.get('/todo',(req,res)=>{
    res.send();
    
})

app.use(bodyParser.json());

app.listen(3000)