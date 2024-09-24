type greet = string | number ;  //it lets you select multiple types .

type user = {
    name: string;
    age: number;
    email?: string;
}
//types and interface are almost same but interface can implemented in class .
interface User  {
    name: string;
    age: number;
    email?: string; // ? - for optional
}

/*-------------------------------------
interface User  {
    name: string;
    age: number;
    email?: string; // ? - for optional
}

function islegal(user: User){
    if(user.age>18){
        return true;
    }else{
        return false;
    }
}

islegal({
    name: "amitesh",
    age: 18,
    email: "amitesh@gmail.com"
})

/*--------------------------------------------------------
function delay(fn: () => void) {  //fn: () => boolean - return type whatever the arg func returning .
    setTimeout(fn,1000)           
}

function isLegal(age: number){ 
    if(age>18){
        return true;
    }else{
        return false;
    }
}
delay(()=>console.log("hi there")); //passing fn in a fn .

/*---------------------
function isLegal(age: number){ //same type inference.
    if(age>18){
        return true;
    }else{
        return false;
    }
}
console.log(isLegal(15));


/*----------------------------------------------------------------------------
//type inference - typescript knows adding two numbers will give you number but
//good practice is to give return type .
function sum(a:number, b:number):number{
    return a + b;
}
const value = sum(4,6);
console.log(value);

/*-------------------------------
function greet(firstName: string){
    console.log("hello" + firstName);
}


greet("amitesh");



/*-------------------------------------------------------
let x: number = 1;
x="amitesh"
console.log(x);

/*-------------------------------------------------------*/