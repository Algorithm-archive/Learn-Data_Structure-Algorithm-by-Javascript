/* Least Commond Multiple (LCM) Finding in JavaScript (ES6) */
const gcd = require('./gcd');

/*
  The basic formula of Calculating LCM of 'a' and 'b' is:
    LCM(a,b) = (a * b)/gcd(a,b)
  As multiplying (a*b) can be a large number for some 'a' and 'b',
  we are dividing one of the numbers, 'a' here,
  by the gcd(a,b) before multiplication and reducing the possibility
  of 'integer overflow'
*/
module.exports.lcm = (a, b) => ((a / gcd(a,b)) * b);
