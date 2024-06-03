const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();

app.get('/files',(req,res)=>{
    fs.readdir('files',(err,data)=>{
      if(err)
        res.send("not able to read directory"+err);
      res.status(200).json({
            data
        })
    })
})

app.get('/file/:filename',(req,res)=>{
    const filepath = path.join(__dirname, './files/', req.params.filename);
    fs.readFile(filepath,"utf-8",(err,data)=>{
      if(err)
        res.status(404).send("file not found"+err);
      else{
        res.status(200).send(data);
      }
    })
})

app.all('*', (req, res) => {
    res.status(404).send('Route not found');
  });
  
app.listen(3000);
