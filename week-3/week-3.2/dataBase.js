const express = require('express');
const app = express();
const mongoose = require('mongoose'); //importing mongoose module

app.use(express.json());  // to parse the body 

mongoose.connect("mongodb+srv://admin:amitesh123@cluster0.2idz5qj.mongodb.net/userappnew") //mongoDB url 

// you have describe your model what should your table look like , mongo expects you to describe the model first.
const User = mongoose.model('Users',{ name : String, email : String, password : String}); 

app.post('/signup',async(req,res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const name = req.body.name;

    const userExisting = await User.findOne({email: username});  //it will if the email already exist in the db or not 
    if (userExisting){
        return res.status(400).send("user already exist");
    }    
    const user = new User ({
        name : name,
        email : username,
        password : password
    })
    user.save();   // you have to save it to reach and store data in your dataBase.
    res.json({
        "msg": "user created successfully "
    });
})

app.listen(3000)