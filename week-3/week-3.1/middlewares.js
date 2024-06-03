const express = require('express');
const app = express();

//creating MIDDLEWARES as a function.
function userVerification(req,res,next){   // here it taking 3 arguments res , req and next where next is used to call next function or move to next 
    const username = req.headers.username;
    const password = req.headers.password;

    //now we have to cheeck for valid username and password
    if (!(username == 'amitesh' && password == 'pass')){
        res.status(400).json({
            msg: "wrong inputs"
        })
    }
    return next();
}

//creating MIDDLEWARES as a function.
function kidneyCheck(req,res,next){   // here it taking 3 arguments res , req and next where next is used to call next function or move to next 
    const kidneyId = req.query.kidneyId;

    //now we have to cheeck for kidneys
    if (!(kidneyId == 1 || kidneyId == 2)){
        res.status(400).json({
            msg: "wrong inputs"
        })
    }
    return next();
}

app.use(userVerification,kidneyCheck); // so here we only need to call once for everywhere pretty clean ryt

//let's see how we use the middlewares.
app.get('/health-checkup',(req,res)=>{  //so how the control will work is first it will go through userverification then kidney check then only it can go to next cb function.
    res.send("your health is fine !")
})

app.get('/kidney-checkup',(req,res)=>{
    res.send("your kidney is fine !")
})

app.get('/heart-checkup',(req,res)=>{
    //do whatever you want to do with user.
    res.send("your heart is fine !")
})


//now one more thing that if you see we need to pass the middleware to every request that is being , what if we call middleware everywhere by just one syntax .
// app.use(passtheMiddleware) - so we've seen this before 'app.use(express.json())' where it was catching the body of post request, 
//so similar to that it will call that middleware every request so we don't need to put the function again & agian
app.listen(3001)


