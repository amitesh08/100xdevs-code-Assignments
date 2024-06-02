//Q1: Create a counter in javaScript (Counts down from 30 to 0)

let seconds = 5;

function countDown() {
    if (seconds === -1) {
        clearInterval(stop);  // Use the correct interval ID
        console.log("Countdown completed!");
    } else {
        console.log(seconds);
        seconds--;
    }
}
// Use setInterval to repeatedly call countDown every 1000 milliseconds (1 second)
const stop = setInterval(countDown, 2000);

