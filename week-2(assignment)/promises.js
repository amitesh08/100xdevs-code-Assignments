function waitOneSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve, 1000);
    });
}

function waitTwoSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve, 2000);
    });
}

function waitThreeSecond() {
    return new Promise(function(resolve){
        setTimeout(resolve, 3000);
    });
}

function calculateTime() {
    var start = new Date().getTime();
    waitOneSecond().then(() => {
        console.log('one second resolved');
        return waitTwoSecond();
    }).then(() => {
        console.log('two second resolved');
        return waitThreeSecond();
    }).then(() => {
        console.log('three second resolved');
        var end = new Date().getTime();
        console.log(`Time to complete is ${end - start} milliseconds`);
    });
}

calculateTime();