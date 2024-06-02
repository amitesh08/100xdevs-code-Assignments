//creating a http server using express

const express = require("express");
const app = express();

function calculateSum(n){
    let ans = 0;
    for (let i = 0 ;i<n; i++){
        ans += i;
    }
    return ans;
}

app.get('/',(req, res)=>{
    //query parameters ?n=100
    const n = req.query.n;  //it'll catch the query provided by the user ....?n=100...
    const ans = calculateSum(n);
    res.send('hi your ans is '+ans);
})

app.listen(3000);