/*
    Fibonacci Calculation in JavaScript
    -----------------------------------

    As fibonacci numbers follow the pattern of:
        Fib[n] = Fib[n-1] + Fib[n-2]
    We can easily calculate n-th fibonacci number calculating
    all the previous values by this formula
*/
function fibonacci(n) {
    var fib, a = 0, b = 1;

	while(n--) {
        fib = a + b;
        a = b;
        b = fib;
    }

    return fib;
}


/************ Testing Fibonacci ***************/
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(3));
console.log(fibonacci(4));
console.log(fibonacci(5));
console.log(fibonacci(10));
