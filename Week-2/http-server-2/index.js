//crating a http server using express.
const express = require("express");

function calculateSum(n) {
    let a = 0
    for (let i =0; i<=n; i++){
        a = a+i;
    }
    return a;
}

const app = express();

app.get("/",function(req,res) {
    const n = req.query.n;
    const ans = calculateSum(n);
    res.send("hi your ans is " + ans);
})

app.listen(3001);