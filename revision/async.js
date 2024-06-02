
function findSum(n){
    let a = 0;
    for (let i = 0; i<=n; i++){
        a += i;
    }
    console.log(a);
}

function findSum100(){
    return findSum(100);
}

setTimeout(findSum100,10000);
console.log("hey there ");

