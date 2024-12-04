// Predict and explain first...
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`)

Prediction: the function is going to print the answer to 10 and 32. 
          It is also going to print "The result of multiplying 10 and 32 is"
The Output of the above code is 320. The result of multiplying 10 and 32 is.

The code above gives us 2 results and that is not what we want to fix we have to remove one console log(). After moving one console log we need to edit our code by declaring 2 variables a and b and log them to print our output. 


Fixing the error: 
function multiply(a, b) {
    console.log(a * b);
  }
  
  let a = 10;
  let b = 32;
 
  let result = multiply(a, b)
  
  console.log(`The result of multiplying ${a} and ${b} is ${result}`);


