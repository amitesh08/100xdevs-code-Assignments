
const obj : {name: string , age : number } = {
    name: "amitesh",
    age: 68
}
obj.name = "none";

console.log(obj.name)

//object signatures 
const obj1 : { [fname: string ]: number } = {}
obj1.amitesh = 24;

console.log(obj1.amitesh)
