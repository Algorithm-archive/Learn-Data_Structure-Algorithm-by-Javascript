// A recursive approach to GCD Implementation
// Details of this code can be found at 'GCD' Directory
const gcd = (a, b) => (b === 0) ? a : gcd(b, a%b);

module.exports = gcd
