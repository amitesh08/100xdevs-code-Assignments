// Create a promise that resolves with a message "Hello, World!" after 2 seconds

function prom1(duration){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            resolve("hello world");
        },duration)
    })
}
prom1(5000).then((data)=>{
    console.log(data + " promise executed");
})