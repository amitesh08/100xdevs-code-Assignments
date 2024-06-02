const express = require('express');
const bodyParser = require('body-parser');
const app = express()

app.use(bodyParser.json());

app.get('/',(req, res)=> {
  console.log(req.body);
  res.send('<b> Hello World<b>')
})
app.post('/post',(req,res)=>{
  res.send('<b> hello there <b>')
})

app.listen(3000)