/*
    Factorial Calculation in JavaScript(ES6)
    -----------------------------------

    As Factorial numbers can be calculated using the formula:
        Factorial[n] = 1 * 2 * 3 * ...... * n
    We can easily calculate n-th factorial number multiplying
    all the previous numbers.

    NOTE: remember that, the Factorial[N] can be very large
        for a very small value of N. So always be careful about
        the result being overflowed of Number limit.
        Calculating large values of Factorial needs some extra
        optimization and tricks based on the task to be solved.
*/

const factorial = (n) => {
    let fact = 1;

  	while(n) {
        fact *= n;
        n--;
    }

    return fact;
}


/*
  Solving Factorial using recursion.
  Recursive formula for Factorial is: F[n] = n * F[n-1]
*/
const recursiveFactorial = (n) => (n === 0) ? 1 : (n * recursiveFactorial(n-1));

/* Following is an optimized version of calculating Factorial using 'Memoization' or
  'Dynamic Programming'.
  To understand how this is actually working you need to read the following article first:
  https://medium.freecodecamp.org/understanding-memoize-in-javascript-51d07d19430e
*/

const memoizedFunction = (fn) => {
  var cache = {};

  return (n) => (n in cache) ? cache[n] : (cache[n] = fn(n));
}

const memoizedFactorial = memoizedFunction((x) => (x === 0) ? 1 : (x * memoizedFactorial(x-1)));

module.exports = {
  factorial,
  recursiveFactorial,
  memoizedFactorial
}
