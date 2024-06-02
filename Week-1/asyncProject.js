const items = {
    Fruits : ["mango" , "banana", "apple", "grapees"],
    con : ["cones", "stick", "cup"],
    liquid : ["chocolate", "ice"],
    toppings : ["sprinkles","chocochip"]
}

function order(Fruitname, callbackFn){
    setTimeout(()=> {
        console.log(`you've selected friut ${items.Fruits[1]}`)
        callbackFn();

    },2000)
}


function production(){
    setTimeout(()=>{
        console.log("production has started...please wait a while")
        setTimeout(()=>{
            console.log(`the ${items.Fruits[1]} has been chopped.`)
            setTimeout(()=>{
                console.log(`Added ${items.liquid[0]} & ${items.liquid[1]}`)
                setTimeout(()=>{
                    console.log(`Machine started...`)
                    setTimeout(()=>{
                        console.log(`${items.con[0]} is picked as container.`)
                        setTimeout(()=>{
                            console.log(`${items.toppings[0]} is picked as toppings.`)
                            setTimeout(()=>{
                                console.log(`Icecream Served....Thank You.`)
                            },1000)
                        },2000)
                    },3000)
                },1000)
            },1000)
        },2000)
    },0000)
}

order(0,production)



//now we see how we can code this in much better way by using PROMISES 
