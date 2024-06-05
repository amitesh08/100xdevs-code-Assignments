const express = require("express");
const jwt = require("jsonwebtoken");  // importing JWT
const jwtPassword = "123456";

const app = express();
app.use(express.json());

// in memory database 
const ALL_USERS = [
  {
    username: "amitesh@gmail.com",
    password: "123",
    name: "amitesh singh",
  },
  {
    username: "raman@gmail.com",
    password: "123321",
    name: "Raman singh",
  },
  {
    username: "priya@gmail.com",
    password: "123321",
    name: "Priya kumari",
  },
];

// 
function userExists(username, password) {
  // write logic to return true or false if this user exists
  // in ALL_USERS array
  let userExists = false;
  for (let i =0; i<ALL_USERS.length; i++){
    if (ALL_USERS[i].username == username && ALL_USERS[i].password==password){
        userExists = true;
    }
  }
  return userExists;
}

app.post("/signin", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;

  if (!userExists(username, password)) {
    return res.status(403).json({
      msg: "User doesn't exist in our in memory db",
    });
  }

  var token = jwt.sign({ username: username }, jwtPassword);
  return res.json({
    token,
  });
});

app.get("/users", function (req, res) {
  const token = req.headers.authorization;
  try {
    const decoded = jwt.verify(token, jwtPassword);
    const username = decoded.username;
    // return a list of users other than this username
    res.json({
        users: ALL_USERS.filter((data)=>{
                if(data.username == username ){
                    return false 
                }
                else{
                    return true
                }
            })
    })
  } catch (err) {
    return res.status(403).json({
      msg: "Invalid token",
    });
  }
});

app.listen(3000)