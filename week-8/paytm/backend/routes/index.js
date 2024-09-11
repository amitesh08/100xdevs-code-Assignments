const express = require('express')
const userRouter = require('./user') //importing user router

const router = express.Router(); // creating router

router.use("/user", userRouter) ; //using user router

module.exports = router ; //exporting router