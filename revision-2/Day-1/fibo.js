let a = 0
let p1 = 1
let p2 = 0
console.log(p2)
console.log(p1)
for (let i = 2; i<=10; i++){
    a = p1 + p2;
    p2 = p1 
    p1 = a
    console.log(a);
}