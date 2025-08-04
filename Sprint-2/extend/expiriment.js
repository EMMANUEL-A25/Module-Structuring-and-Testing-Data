 

function convertToPercentage(decimalNumber) {
  const percentage = `${decimalNumber * 100}%`;
  return percentage;
}

const result = convertToPercentage(0.5);
const output2 = convertToPercentage(0.231);

console.log(result);
console.log(output2);