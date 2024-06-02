//how to use promises 

const fs = require("fs"); //this gives you access to read the file.


//my own asynchronous function.
function amiteshReadfile(){
    console.log("inside amitesh readfile");
    return new Promise (function(resolve){
        console.log("inside promise")
        fs.readFile("test.txt","utf-8",function(err,data){
            console.log("before data");
        resolve(data);
        });
    })
}

function ondone(data){   
//callback function to call
    console.log(data);
}

amiteshReadfile().then(ondone);
console.log("hi there");