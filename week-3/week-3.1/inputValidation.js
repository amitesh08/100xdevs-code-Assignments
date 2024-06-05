// what if user sends the wrong input
//why do need the input validation, let's see with an example

const express = require('express');
const app = express();

const zod = require('zod'); // importing ZOD
const schema = zod.array(zod.number());  // it will only accept the array of number nothing else pretty easy right..

// eamil : string 
// password : atleast 8 letters
//country : "in","us"
// lets see how we can create these type of schema

/*
    const schema = zod.object((
        eamil : z.string().email(),
        password : z.string().min(8)'
        country: z.litereal("in").or(z.litereal("us"))   // it means exact same values
    ))

*/

app.use(express.json()); // it is the middleware which lets you extract body 

app.post('/health-checkup',(req,res)=>{
    //kidneys = [1,2,3,]
    //users can send any input which led to crash the server . so it is our duty to validate the inputs so only desired inputs are accepted.
    //input validation using ZOD
    const kidneys = req.body.kidneys;
    const response = schema.safeParse(kidneys);       

    if(!response.success){
        res.status(411).json({
            msg:"wrong inputs"
        })
    }else {
        res.send({
            response
        })
    }
})

// global catches - it is juset another middleware ..always put after the request . error based middlewares 
// which takes 4 inputs ,if there is exception there the control will reach here ..Error handling middleware.
app.use((err,req,res,next)=> {
    res.json({
        msg : "sorry something with the server "
    })
})

app.listen(3000);