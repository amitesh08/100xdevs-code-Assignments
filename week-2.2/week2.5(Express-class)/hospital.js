const express = require("express");
const app = express();

app.use(express.json());  //middlewares 

var users = [{
    name: 'amitesh',
    kidneys: [{
        healthy: false
    },{
        healthy: true
    }]
}]

app.get('/',(req,res)=>{
    const amiteshKidneys = users[0].kidneys;
    const numberofKidneys = amiteshKidneys.length;
    let numberofHealthyKidneys = 0;
    for (let i=0; i<numberofKidneys; i++){
        if(amiteshKidneys[i].healthy)
            numberofHealthyKidneys++;
    }
    const numberofUnhealthyKidneys = numberofKidneys - numberofHealthyKidneys;
    res.json({
        numberofKidneys,
        numberofHealthyKidneys,
        numberofUnhealthyKidneys
    })
    
    res.send('')
})

app.post('/',(req,res)=>{
    //in POST request you send data in body but in GET it called a query parameter...
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy: isHealthy
    });
    res.json({
        msg: "done"
    })
})

app.put('/',(req,res)=>{
    for (let i =0;i<users[0].kidneys.length;i++){
        users[0].kidneys[i].healthy = true;
    }
    res.json({})
})

//removing all the unhealthy kidneys
app.delete('/',(req,res)=>{
    //only atleast one unhealthy kidneys is there then proceed else return 411 
    if(atLeast1unhealthyKidney()){
        const newkidneys = [];
        for (let i =0;i<users[0].kidneys.length;i++){
            if (users[0].kidneys[i].healthy)
                newkidneys.push({
                    healthy: true
                })
        }
        users[0].kidneys= newkidneys;
        res.json({
            msg: "done"
        })
    }
    else{
        res.status(411).json({
            msg: "you have no bad kidneys"
        })
    }
})

function atLeast1unhealthyKidney(){
    let oneUnhealhtyKidney = false;
    for (let i =0;i<users[0].kidneys.length;i++){
        if (!users[0].kidneys[i].healthy)
            oneUnhealhtyKidney = true;
    }
    return oneUnhealhtyKidney;
}

app.listen(3001);