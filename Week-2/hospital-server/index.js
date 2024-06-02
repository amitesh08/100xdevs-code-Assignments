const express = require("express");
const app = express();

const users = [{
    name: "Joe",
    kidneys: [{
        healthy: false
    }]
}];

app.use(express.json());

app.get("/", function(req, res) {
    const joeKidneys = users[0].kidneys;
    const numberOfKidneys = joeKidneys.length;
    let numberOfHealthyKidneys = 0;
    for(let i =0; i<joeKidneys.length; i++) {
        if(joeKidneys[i].healthy) {
            numberOfHealthyKidneys = numberOfHealthyKidneys +1;
        }
    }
    const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
    res.json({
        numberOfKidneys,
        numberOfHealthyKidneys,
        numberOfUnhealthyKidneys
    })
})

app.post("/", function(req, res) {
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    })
    res.json({
        msg: "Done!"
    })
})

app.put("/", function(req, res){
    if (unHealthyKidney()){
        for(let i=0; i<users[0].kidneys.length; i++){
            users[0].kidneys[i].healthy = true;
        }
        res.json({})
    }
    else {
        res.status(411).json({
            msg: "there is no unhealhty kidneys"
        })
    }

})

//removing all the unhealthy kidneys
app.delete("/", function(req, res){
    //only  if 1 bad or unhealthy kidneys is there
    if(unHealthyKidney()){
        const newKidneys = [];
        for (let i = 0; i<users[0].kidneys.length; i++){
            if(users[0].kidneys[i].healthy){
                newKidneys.push({
                    healthy: true
                })
            }
        }
        users[0].kidneys = newKidneys; 
        res.json({msg: "done!"})
    }
    else {
        res.status(411).json({
            msg: "you've no bad kidneys"
        });
    }


})

function unHealthyKidney(){
    let unHealthy = false
    for (let i= 0; i<users[0].kidneys.length; i++){
        if (!users[0].kidneys[i].healthy){
            unHealthy= true;
        }
    }
    return unHealthy;
}

app.listen(3000);