/*
    Factorial Calculation in JavaScript
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

function factorial(n) {
    var fact = 1;

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
function recursiveFactorial(n) {
    if (n === 0) return 1;

    return n * recursiveFactorial(n-1);
}


/* Following is an optimized version of calculating Factorial using 'Memoization' or
  'Dynamic Programming'.
  To understand how this is actually working you need to read the following article first:
  https://medium.freecodecamp.org/understanding-memoize-in-javascript-51d07d19430e
*/

function memoizedFunction(fn) {
  var cache = {};

  return function(n) {
    if (n in cache) return cache[n];

    cache[n] = fn(n);
    return cache[n];
  }
}

var memoizedFactorial = memoizedFunction(function(x) {
    if (x === 0) {
      return 1;
    }
    else {
      return x * memoizedFactorial(x - 1); //Recursive formula for factorial is: F[n] = n * F[n-1]
    }
});


/************ Testing Factorial ***************/
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
