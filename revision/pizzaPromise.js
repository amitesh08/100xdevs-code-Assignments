function pizza(){
    return new Promise((resolve,reject)=>{
        let pizzaDel= true;
        if (pizzaDel){
            resolve("pizza delivered");
        }
        else {
            reject("pizza didn't deliver");
        }
    })
}

pizza()
    .then((data)=> {
        console.log(data + " enjoy your meal");
    })
    .catch((data)=> {
        console.log(data + " sorry for the inconviniance");
    });