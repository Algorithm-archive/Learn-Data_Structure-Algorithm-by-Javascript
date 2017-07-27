/* Greatest Common Divisor (GCD) Finding in JavaScript */

const gcd = (a, b) => {
	while (true) {
        var remainder = a%b;
        if (remainder === 0) return b;

        a = b;
        b = remainder;
    }
}

//A recursive approach to GCD Implementation
const recursive_gcd = (a, b) => (b === 0) ? a : recursive_gcd(b, a%b);

module.exports = {
  gcd,
  recursive_gcd
}
