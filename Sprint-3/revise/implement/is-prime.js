 function isPrime(num) {
  // Handle base cases: 0, 1, and 2
  if (num <= 1) return false;
  if (num === 2) return true;

  // Check only odd numbers from 3 to the square root of num
  const sqrtNum = Math.sqrt(num);
  for (let i = 3; i <= sqrtNum; i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

module.exports = isPrime;
