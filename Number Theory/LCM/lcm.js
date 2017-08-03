/* Least Commond Multiple (LCM) Finding in JavaScript */

/*
  The basic formula of Calculating LCM of 'a' and 'b' is:
    LCM(a,b) = (a * b)/gcd(a,b)
  As multiplying (a*b) can be a large number for some 'a' and 'b',
  we are dividing one of the numbers, 'a' here,
  by the gcd(a,b) before multiplication and reducing the possibility
  of 'integer overflow'
*/
function lcm(a, b) {
    return (a / gcd(a,b)) * b;
}

function gcd(a, b) {
	while (true) {
        var remainder = a%b;
        if (remainder === 0) return b;

        a = b;
        b = remainder;
    }
}


/************ Testing LCM ***************/
console.log(lcm(5, 10));
console.log(lcm(14, 35));
