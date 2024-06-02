function ans(ans){
    console.log("The ans is: " + ans);
  }


function addNumbers(num1, num2, callback) {
    // Your code here
    let ans= num1 + num2;
    return callback(ans);
  }
  
  // Example usage:
  addNumbers(5, 10, ans)


  /*Question-2 */

  function multiplier(number, callback) {
    // Your code here
    let multi = number*2;
    callback(multi);
  }
  
  // Example usage:
  multiplier(8, function(ans) {
    console.log("Twice the number is: " + ans);
  });
  
  
  /*Question-3 */
  
  function delayedGreeting(name, callback) {
    // Your code here
    setTimeout(function (){
        callback(name); //we can pass the argument in the function only if -
    },2000);               //-we are under a anonymous function for the setTimeout
    
    
  }
  
  // Example usage:
  delayedGreeting("Alice", function(greeting) {
    console.log("Hello, " + greeting + "!");
  });

  //Question-4

  function filterArray(arr, callback) {
    let ans = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (callback(arr[i])) { //here if it returns true only then it can enter in the conditon.
        ans.push(arr[i]); //.push is used to push the elements in the array 
      }
    }
  
    return ans;
  }
  
  // Example usage:
  const numbers = [1, 2, 3, 4, 5, 6];
  const evenNumbers = filterArray(numbers, function (num) {
    return num % 2 === 0;
  });
  
  console.log(evenNumbers); // Expected output: [2, 4, 6]

  //Question-5   toDo

  function calculate(num1, num2, operation, callback) {
    // Your code here
    let ans ;
    switch (operation) {
      case "add":
        ans = num1 + num2;
        break;
      case "subtract":
        ans = num1 - num2;
        break;
      case "multiply":
        ans = num1 * num2;
        break;
      case "divide":
        ans = num1 / num2;
        break;
      default:
        console.error("Invalid operation");
        return;
    }
    
    callback(ans)
  }
  
  // Example usage:
  calculate(10, 5, "multiply", function(ans) {
    console.log("The ans is: " + ans);
  });
  
  
  
  