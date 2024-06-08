// decode , verify, generate
const jwt = require("jsonwebtoken");


const value = {
    user: {
        name: 'amitesh',
        accountNo: '278956'
    }
};
/***GENERATE***/
const token = jwt.sign(value, "secret");  //the function to generate is sign.
// this token has been generated by using secret hence this token can only be verified using secret.
console.log(token);

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7Im5hbWUiOiJhbWl0ZXNoIiwiYWNjb3VudE5vIjoiMjc4OTU2In0sImlhdCI6MTcxNzg2Mjc0Mn0.dxpQVWZNHVAoaSKUHcEaiC93lhkPzquOUcjPDZyPwAQ
// this is your token and anyone can decode it get the user info but only the backend will verify it 


/***VERIFY***/
try{
    const verified= jwt.verify(token,"secret")
    console.log(verified);
}
catch(e){
    console.log("error");
}