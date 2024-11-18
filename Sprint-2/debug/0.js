// Predict and explain first...
function multiply(a, b) {
  console.log(a * b);
}

console.log(`The result of multiplying 10 and 32 is ${multiply(10, 32)}`)

Preditction: the function is going to print the answer of 10 and 32. 
          It is also going to print "The result of multiplyling 10and 32 is"
The Output of the above code is : 320. The result of multiplying 10 and 32 is.

The code above gives us 2 resutls and that not what we want to fix it we have to remove one console log()

fixing the error: 

function multiply(a, b) {
  return (a * b) 
}

console.log('The result of multiplying 10 and 32 is ${multiply(10,32)}')


