// ## File cleaner
// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was
// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman
// ```

const fs = require("fs");

fs.readFile("b.txt","utf-8",(err,data)=>{
    if (err){
        console.log("err reading the file. "+err);
        return;
    }
    let modifiedData = data.replace(/\s+/g, ' ').trim();
    
    fs.writeFile("b.txt",modifiedData,"utf-8",(err)=>{
        if(err){
            console.log("not write the file." +err);
            return;
        }
        console.log("file has been written successfully ");
    })
    console.log(data);
    
})
