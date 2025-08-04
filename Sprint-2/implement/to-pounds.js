// In Sprint-1, there is a program written in interpret/to-pounds.js

// You will need to take this code and turn it into a reusable block of code.
// You will need to declare a function called toPounds with an appropriately named parameter.

// You should call this function a number of times to check it works for different inputs

const penceString = "399p";

const penceStringWithoutTrailingP = penceString.substring(
 0,penceString.length - 1
); //using the substring method we re,ove the P from the string 399p and the result become 399


const paddedPenceNumberString = penceStringWithoutTrailingP.padStart(3, "0"); //modying the code to 

const pounds = paddedPenceNumberString.substring(
 0,
 paddedPenceNumberString.length - 2
); // our result here is 3 and padded start 3 so that our code can work with any input. (399 - 2 = 3)using the substring method and select the index we want from the string.


const pence = paddedPenceNumberString
  .substring(paddedPenceNumberString.length - 2)  //this result her is 99 and we are using pad end to make sure add cahracters to end of our string.helps us maintain any length our string may have instead of modyifying the code.
 .padEnd(2, "0");


console.log(`£${pounds}.${pence}`);