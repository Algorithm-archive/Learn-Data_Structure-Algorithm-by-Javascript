/* Least Commond Multiple (LCM) Finding in JavaScript */

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
