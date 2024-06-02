// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.

const fs = require ("fs");

const data = "writing through write file ";

fs.writeFile("a.txt",data,"utf-8",(err)=> {
    if(data){
        console.log("data logged succesfully.");
    }
    else{
        console.log("error writing thefile, "+ err);
    }
})

fs.readFile("a.txt","utf-8",(err,msg)=>{
    console.log(msg);
})

let a = 0;
for (let i = 0; i<100; i++){
    a += i;
}
console.log(a);