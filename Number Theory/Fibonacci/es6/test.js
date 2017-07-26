const { fibonacci, recursiveFibonacci, memoizedFibonacci } = require('./fibonacci')

console.log('====== Simple Fibonacci ==========');
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(10));

console.log('====== Recursive Fibonacci ==========');
console.log(recursiveFibonacci(5));
console.log(recursiveFibonacci(10));

console.log('====== Memoized Fibonacci ==========');
console.log(memoizedFibonacci(5));
console.log(memoizedFibonacci(6));
console.log(memoizedFibonacci(10));
