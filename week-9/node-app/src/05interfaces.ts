let data : {
    fname: string ,
    age: number
} = {
    fname:"asd",
    age: 23
}

interface Data1 {
    name: string ,
    age: number, 
}

const userData: Data1 = {   // to assign types you can use interfaces 
    name: "amitesh",
    age: 16,
}

function doSomething(userData: Data1): void{
    { userData.age>12 ? console.log("enter") : console.log("don't enter") }
}

doSomething(userData)
