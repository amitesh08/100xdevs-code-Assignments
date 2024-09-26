//A tuple is a typed array in which you can define length and types of each index.

let tuple: [number, boolean, string];  //defining the type and length 

tuple = [5, true, "amitesh"]
tuple.push(false)

console.log(tuple)

//readonly tuple

let tuple1: readonly [number, boolean , string ]

tuple1 = [3, true, "hi there"]
// tuple1.push("hello")   cannot update element in readonly. 

console.log(tuple1) 

//named tuple
let tuple2: [a:number, b:string] = [86, "hi there"]

console.log(tuple2)

// another way
let tuple3: [number , number] = [12,12]
let [x,y] = tuple3;    //object destructuring

console.log(tuple3)
