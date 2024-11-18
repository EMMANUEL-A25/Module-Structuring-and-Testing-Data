// Predict and explain first...

function sum(a, b) {
  return;
  a + b;
}

console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

Prediction: theres something wrong with the syntax of our code, infront of our return we have a semi Colon instead of a colon and our alignment is off. 
            Hence the result of the sum function will be undefined.


Fixing the error: 

function sum(a, b) {
   return  a + b;
}
 
console.log(`The sum of 10 and 32 is ${sum(10, 32)}`);

Result of the code is = The sum of 10 and 32 is 42
