//generics - 
function identity<T>(arg: T): T {
    return arg;
}

let output1 = identity<string>("myString");
let output2 = identity<number>(100);

console.log(output1.toUpperCase())

//---------------------------------------------------------

function gen<T>(val: T):T {
    console.log(val);
    return val;
}

gen<string>("amitesh")