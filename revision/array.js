console.log("hello there")
let arr = [6,2,3,4,5,];
console.log(arr)
let ans = arr[0];
for (let i = 0; i <arr.length; i++){
    if (arr[i] > ans){
        ans = arr[i]
    }
}
console.log("biggest numbe in an array is " +ans);



// ----------------------------------------------------------//

//OBJECTS

let obj = [{
    name: "amitesh",
    age: 23
},
{
    name: "abhi",
    age: 24
},
{
    name : "priya",
    age : 30 
}];

for (let i = 0; i < obj.length; i++){           // lengthy approach 
    if (obj[i]["age"] < 25){
        console.log(obj[i]["name"]);
    }
}
