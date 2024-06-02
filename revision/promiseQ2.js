//Create a promise that rejects with a message "Something went wrong" if a certain condition (e.g., a random number being less than 0.5) is met


function randomnum(){
    return new Promise ((resolve,reject)=> {
        let random = Math.random()*1;

        if (random > 0.5){
            resolve("executed succesfully " + random);
        }
        else {
            reject("something went wrong "+ random);
        }
    })
}

randomnum().then((data)=>{
    console.log(data);
})
.catch((error)=> {
    console.log(error);
})