/* Sieve of Eratosthenes implementation in JavaScript */

function sieve(limit) {
    var sieve = [],
        primes = [];

    var sieve = Array.apply(null, Array(limit)).map(function (elem, index) {
        //As we know only 'even' prime number is 2, we are marking each of the 'even' index as false
        return ((index % 2) === 1); //if the index is odd return true, otherwise return false
    });

    sieve[1] = false;
    sieve[2] = true;

    var sqrtLimit = Math.sqrt(limit);

    for (var i=3; i<=sqrtLimit; i+=2) {
        if (sieve[i] === true) {
            for (var k=i*i; k<=limit; k+=i)
                sieve[k] = false;
        }
    }

    sieve.forEach(function (value, key) {
        if (value)
            primes.push(key);
    });

    return primes;
}


/************ Testing Sieve of Eratosthenes Code ***************/
console.log(sieve(100));
