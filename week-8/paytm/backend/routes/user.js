const express = require('express');
const zod = require('zod');
const { User } = require('../db');
const jwt = require('jsonwebtoken');
const JWT_SECRET = require('./config');
const authMiddleware = require('../middleware');

const router = express.Router();

const signupSchema = zod.object({   //validation schema for signUp
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string(),
})

const signinSchema = zod.object({      //validation schema for signIn
    username: zod.string().email(),
    password: zod.string(),
})

const updateSchema = zod.object({      //validation schema for update
    firstName: zod.string(),
    lastName: zod.string(),
})

router.post("/signup" , async (req, res) => {       //creating user
    const body = req.body;
    const {success} = signupSchema.safeParse(req.body);
    if(!success){
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = User.findOne({      //checking if user already exists
        username: body.username
    });
    if(user._id){       //if user already exists
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const dbUser = await User.create(body)      //creating user
    const token = jwt.sign({        //generating token
        userId: dbUser._id
    },JWT_SECRET);

    res.status(200).json({    //sending response
        message: "User created successfully",
        token: token
    })
})

router.post("/signin", async (req, res) => {      //signing in
    const body = req.body;
    const {success} = signinSchema.safeParse(req.body);  
    if(!success){    //if validation fails
        return res.status(411).json({
            message: "Error while logging in"
        })
    }

    const user = await User.findOne({     //checking if user exists
        username: body.username,
        password: body.password
    })

    if(user){  //if user exists
        const token = jwt.sign({
            userId: user._id
        }, JWT_SECRET);
  
        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({      //if user doesn't exist
        message: "Error while logging in"
    })
})

router.put("/", async(req, res) => {      //updating user
    const body = req.body;
    const {success} = updateSchema.safeParse(req.body);
    if(!success){      //if validation fails
        return res.status(411).json({
            message: "error while updating"
        })
    }
    await User.updateOne({      //updating user
        _id: req.userId
    },body)

    res.status(200).json({       //sending response
        message: "updated successfully"
    })
})

router.get("/bulk", async (req, res) => {       //fetching users
    const filter = req.query.filter || "";    //getting filter

    const users = await User.find({    //fetching users
        $or: [{                        //filtering users
            firstName: {               
                "$regex": filter       
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({     //sending response
            username: user.username,    
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})
module.exports = router ;