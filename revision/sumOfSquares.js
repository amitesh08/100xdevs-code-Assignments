function square(n){
    return n*n;
}

function cube(n){
    return n*n*n;
}

function sumOf(a,b,cb){
    return cb(a) + cb(b);
}

let ans = sumOf(10,5,cube);
console.log(ans);