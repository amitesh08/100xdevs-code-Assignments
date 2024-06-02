//Write a function to that find the sum pf two numbers.
function sum(a, b, fnToCall){
    fnToCall(a+b);
}

function pretty(val){
    console.log("the sum of a & b is "+val)
}
function pretty2(val){
    console.log("sum is "+val)
}

const value= sum(20,15,pretty2)      
//this is callbacks....passing the fn as a value in a fn
