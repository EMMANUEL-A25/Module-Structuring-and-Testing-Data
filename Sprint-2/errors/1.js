.exit// Predict and explain first...

// Why will an error occur when this program runs?
// Try playing computer with the example to work out what is going on

function convertToPercentage(decimalNumber) {
  const decimalNumber = 0.5;
  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);

The error occured because the decimal number variable that was declared, 
had already been declared in the function input. 
Also we got the worng reuslts becuase our decimalNumber = 0.5 variable was inside the function instead of outside
to fix  this heres is the correct code

const decimalNumber = 0.5;
 function convertToPercentage(decimalNumber) {

  const percentage = `${decimalNumber * 100}%`;

  return percentage;
}

console.log(decimalNumber);



