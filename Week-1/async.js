function findsum(n){
    let ans =0;
    for(let i = 0; i<n; i++){
        ans=ans+i;
    }
    return ans;
}
setTimeout(function() {
    console.log(findsum(100))
},2000)
console.log("hey task done")    
//tsk get executed while other task is still running in some other thread

//read file
function readfile(err,data){
    console.log("data read from he file: "+data)
}
const fs = require('fs');  //a library you need to import before raedfile function.
fs.readFile("read.txt", "utf-8",readfile)
console.log("after readfile")