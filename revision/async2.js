//fs.readfile()

const fs = require("fs"); //this gives you access to read the file.

fs.readFile("test.txt","utf-8",function(err,data){
    console.log(data);
    
})

console.log("hi there");

