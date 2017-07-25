/*
    Fibonacci Calculation in JavaScript(ES6)
    -----------------------------------

    As fibonacci numbers follow the pattern of:
        Fib[n] = Fib[n-1] + Fib[n-2]
    (having the base case of starting values-> Fib[0] = 0 and Fib[1] = 1)
    We can easily calculate n-th fibonacci number calculating
    all the previous values by this formula.

    NOTE: remember that, the Fibonacci[N] can be very large
        for a very small value of N (You can safely calculate almost upto N=97).
        So always be careful about the result being overflowed of Number limit.
        Calculating large values of Fibonacci needs some extra
        optimization and tricks based on the task to be solved.
*/

const fibonacci = (n) => {
    let fib, a = 0, b = 1;

    if(n === 0 || n === 1) return n;

    while(--n) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
}

/*
  Solving Fibonacci using recursion.
  Recursive formula for Fibonacci is: F[n] = F[n-1] + F[n-2]
*/
const recursiveFibonacci = (n) => (n === 0 || n === 1) ? n : (recursiveFibonacci(n-1) + recursiveFibonacci(n-2));

/* Following is an optimized version of calculating Fibonacci using 'Memoization' or
  'Dynamic Programming'.
  To understand how this is actually working you need to read the following article first:
  https://medium.freecodecamp.org/understanding-memoize-in-javascript-51d07d19430e
*/

const memoizedFunction = (fn) => {
  var cache = {};

  return (n) => (n in cache) ? cache[n] : (cache[n] = fn(n));
}

const memoizedFibonacci = memoizedFunction((x) => (x === 0 || x === 1) ? x : (memoizedFibonacci(x - 1) + memoizedFibonacci(x - 2)));

module.exports = {
  fibonacci,
  recursiveFibonacci,
  memoizedFibonacci
}
