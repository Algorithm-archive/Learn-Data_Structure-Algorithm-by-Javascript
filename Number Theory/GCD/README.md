# Greatest Commond Divisor Finding (Euclidean algorithm)

The **Greatest Common Divisor (GCD)** of two integers A and B is the *largest integer that divides both A and B*. For example, the gcd of 8 and 12 is 4.

The greatest common divisor is also known as the greatest common factor (gcf), highest common factor (hcf), greatest common measure (gcm), or highest common divisor.

**Euclid's algorithm**, is an efficient method for computing the greatest common divisor (GCD) of two numbers, the largest number that divides both of them without leaving a remainder.

#### Using Euclid's algorithm:

Euclidean algorithm, uses a division algorithm such as long division in combination with the observation that the gcd of two numbers also divides their difference. To compute gcd(48,18), divide 48 by 18 to get a quotient of 2 and a remainder of 12. Then divide 18 by 12 to get a quotient of 1 and a remainder of 6. Then divide 12 by 6 to get a remainder of 0, which means that 6 is the gcd. Note that we ignored the quotient in each step except to notice when the remainder reached 0, signaling that we had arrived at the answer. Formally the algorithm can be described as:

```
gcd(a,0) = a
gcd(a,b) = gcd(b, a mod b)
```

where

```
a mod b = a - b * floor(a/b)
```

If the arguments are both greater than zero then the algorithm can be written in more elementary terms as follows:

```
gcd(a,a) = a
gcd(a,b) = gcd(a-b, b), if a > b
gcd(a,b) = gcd(a, b-a), if b > a
```

### More on this topic
- [Euclidean algorithm - Wikipedia](https://en.wikipedia.org/wiki/Euclidean_algorithm)
- [GCD - Wikipedia](https://en.wikipedia.org/wiki/Greatest_common_divisor)
- [Euclidean algorithm - khanacademy](https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm)
