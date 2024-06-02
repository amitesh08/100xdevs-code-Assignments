// ## Reading the contents of a file

// Write code to read contents of a file and print it to the console. 
// You can use the fs library to as a black box, the goal is to understand async tasks. 
// Try to do an expensive operation below the file read and see how it affects the output. 
// Make the expensive operation more and more expensive and see how it affects the output. 


const fs = require("fs");

fs.readFile("a.txt","utf-8",(err,data)=>{
    console.log(data);
})

let a =0;
for(let i =0; i<10000000; i++){
    a += i;
}
console.log(a);

let b =0;
for(let j =0; j<1000000000; j++){
    b += j;
}
console.log(b);

setTimeout(()=>{
    console.log("hi i am inside the setTimeout and called after 10 sec. ");
},1000)