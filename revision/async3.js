const fs = require("fs");

console.log("before reading the file ");

fs.readFile("test.txt","utf-8",(err,data)=> {
console.log("inside readfile");
    console.log(data);
})

let a = 0;
for (let i =0; i<20; i++){
    a += i;
}
console.log("after reading file ");
