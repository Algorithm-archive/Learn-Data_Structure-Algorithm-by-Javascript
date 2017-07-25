const { factorial, recursiveFactorial, memoizedFactorial } = require('./factorial')

console.log('====== Simple Factorial ==========');
console.log(factorial(1));
console.log(factorial(2));
console.log(factorial(3));
console.log(factorial(4));
console.log(factorial(5));
console.log(factorial(10));
console.log(factorial(20));

console.log('====== Recursive Factorial ==========');
console.log(recursiveFactorial(10));
console.log(recursiveFactorial(20));

console.log('====== Memoized Factorial ==========');
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(6));
console.log(memoizedFactorial(5));
console.log(memoizedFactorial(10));
