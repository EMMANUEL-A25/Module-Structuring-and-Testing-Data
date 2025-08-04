
function toPounds(penceStringInput) {
  // Remove the 'p' suffix if it exists, and ensure it's treated as a number string.
  // Using parseInt to handle cases where 'p' might not be present or other non-numeric chars.
  const numericPenceValue = parseInt(penceStringInput, 10);


  // Convert the numeric value back to a string to use string manipulation methods.
  // Pad the string with leading zeros to ensure at least three digits (e.g., '9' becomes '009').
  const paddedPenceNumberString = String(numericPenceValue).padStart(3, "0");

  // Extract the pounds part: all digits except the last two.
  // For "399", it's "3". For "009", it's "0".
  const pounds = paddedPenceNumberString.substring(
    0,
    paddedPenceNumberString.length - 2
  );

  // Extract the pence part: the last two digits.
  // For "399", it's "99". For "009", it's "09".
  const pence = paddedPenceNumberString.substring(
    paddedPenceNumberString.length - 2
  );

  // Return the formatted string.
  return `£${pounds}.${pence}`;
}

console.log(toPounds(399));

//solved