/* Sieve of Eratosthenes implementation in JavaScript(ES6) */

// This function will return the list of Primes less than given 'limit'
module.exports.sieve = (limit) => {
    //As we know only 'even' prime number is 2, we are marking each of the 'even' index as false
    const sieve = new Array(limit).fill(0).map((elem, index) => ((index % 2) === 1));  //if the index is odd return true, otherwise

    sieve[1] = false;
    sieve[2] = true;

    const sqrtLimit = Math.sqrt(limit);

    for (var i=3; i<=sqrtLimit; i+=2) {
        if (sieve[i] === true) {
            for (var k=i*i; k<=limit; k+=i)
                sieve[k] = false;
        }
    }

    const primes = [];
    sieve.forEach((value, key) => {
      if (value)
        primes.push(key);
    });

    return primes;
}
