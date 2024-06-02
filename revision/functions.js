function add(a,b,fnToCall){
    let ans = a+b;
    fnToCall(ans);
}

function pretty(val){
    console.log("the sum of a & b is " +val);
}

function pretty2(val){
    console.log(val+ " is the sum of a & b.");
}

add(3,5,pretty2);  //this is callback funciton in which you pass function as a argument.
