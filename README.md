# Learn Data Structure and Algorithms by JavaScript

> You need to have basic understanding of the JavaScript programming language to proceed with the codes from this repository.



## Table of Contents
- [Introduction to JavaScript](#introduction)
- [Data Structure](./Data%20Structure/)
  - [Linked List](./Data%20Structure/Linked%20List/)
  - [Stack](./Data%20Structure/Stack/)
  - [Queue](./Data%20Structure/Queue/)
  - [Binary Search Tree (BST)](./Data%20Structure/BST/)
  - Heap
  - Hash Table
  - Disjoint Set Union (Union Find)
  - Trie
  - Suffix Array
  - Segment Tree
  - Binary Indexed Tree (BIT)
  - Heavy Light Decomposition


- [Searching](./Searching/)
  - [Linear Search](./Searching/Linear%20Search/)
  - [Binary Search](./Searching/Binary%20Search/)
  - [Ternary Search](./Searching/Ternary%20Search/)


- [Sorting](./Sorting/)
  - [Selection Sort](./Sorting/Selection%20Sort/)
  - [Bubble Sort](./Sorting/Bubble%20Sort/)
  - [Insertion Sort](./Sorting/Insertion%20Sort/)
  - [Merge Sort](./Sorting/Merge%20Sort/)
  - [Quick Sort](./Sorting/Quick%20Sort/)
  - Bucket Sort
  - [Counting Sort](./Sorting/Counting%20Sort/)
  - Heap Sort
  - [Radix Sort](./Sorting/Radix%20Sort/)


- [Graph Algorithms](./Graph%20Algorithms)
    - [Graph Representation](./Graph%20Theory/Graph%20Representation)
    - [Breadth First Search (BFS)](./Graph%20Theory/Breadth%20First%20Search)
    - [Depth First Search (DFS)](./Graph%20Theory/Depth%20First%20Search)
    - Topological Sort
    - Strongly Connected Components (SCC)
    - Minimum Spanning Tree (MST)
    - All Pairs Shortest Path (Floyd Warshall's Algorithm)
    - Single Source Shortest Path Algorithm
        - Djkastra's Algorithm
        - Bellman Ford Algorithm
    - Directed Acyclic Graph
    - Bipartite Matching
    - Articulation Point, Bridge
    - Euler Tour/Path
    - Hamiltonian Cycle
    - Stable Marriage Problem
    - Chinese Postman Problem
    - 2-satisfiability
    - Flow Algorithms
        - Maximum Flow
        - Minimum Cut
        - Min-Cost Max Flow
        - Maximum Bipartite Matching
        - Vertex Cover

- Dynamic Programming
    - Rod Cutting
    - Maximum Sum (1D, 2D)
    - Coin Change
    - Longest Common Subsequence
    - Longest Increasing Subsequence
    - Matrix Multiplication
    - Edit Distance (Levenshtein distance)
    - 0/1 Knapsack
    - Travelling Salesman Problem
    - Optimal Binary Search Tree


- Greedy Algorithms
    - Activity Selection/Task Scheduling
    - Huffman Coding
    - Knapsack Problem (Fractional Knapsack)


- String Algorithms
    - Rabin-Karp Algorithm
    - Knuth-Morris-Pratt Algorithm
    - Z Algorithm
    - Aho-Korasick Algorithm
    - Manachers Algorithm
    - Boyr-Moore Algorithm


- Number Theory
    - [Greatest Common Divisor (GCD)](./Number%20Theory/GCD/)
    - [Longest Common Multiplier (LCM)](./Number%20Theory/LCM/)
    - Euler Totient (Phi)
    - Primality Testing
    - Prime finding(Sieve of Eratosthenes)
    - Prime factorization
    - [Factorial](./Number%20Theory/Factorial/)
    - [Fibonacci](./Number%20Theory/Fibonacci/)
    - Counting, Permutation, combination
    - Exponentiation    
    - Big Mod
    - Euclid, Extended euclid
    - Josephus Problem
    - Farey Sequence
    - Catalan numbers
    - Burnside's lemma/circular permutation
    - Modular inverse
    - Probability
    - Chinese Remainder Theorem
    - Gaussian Elimination method
    - Dilworth's Theorem
    - Matrix Exponentiation


- Computational Geometry
    - Pick's Theorem
    - Convex hull
    - Line Intersection
    - Point in a polygon
    - Area of a polygon
    - Line Sweeping
    - Polygon intersection
    - Closest Pair


- Game Theory
    - Take Away Game
    - Nim's Game
    - Sprague-grundy Number

 - Others
    - BackTracking
        - N-Queen's Problem
    - [Tower of Hanoi Problem](./Others/Tower%20of%20Hanoi/)

---

## Introduction

JavaScript is a **loosely typed** or a **dynamic language**. That means you don't have to declare the type of a variable ahead of time. The type will get determined automatically while the program is being processed. That also means that you can have the same variable as different types:
```javascript
var foo = 42;    // foo is now a Number
var foo = 'bar'; // foo is now a String
var foo = true;  // foo is now a Boolean
```

### Data Types in JavaScript
The latest ECMAScript standard defines seven data types:

- Six data types that are primitives:

  - Boolean (`true` and `false`)
  - Null (invalid object or address has the value `null`)
  - Undefined (a variable that has not been assigned a value has the value `undefined`)
  - Number (integer and floating point values ranging from  -(2<sup>53</sup> -1) to (2<sup>53</sup> -1), +Infinity, -Infinity and NaN(not-a-number) )
  - String (Sequence of textual characters. Strings are immutable in JavaScript)
  - [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (new in ECMAScript 6)

- [Object](https://www.w3schools.com/js/js_object_definition.asp)

#### Arrays
JavaScript **Arrays** are regular objects for which there is a particular relationship between integer-key-ed properties and the 'length' property. Additionally, arrays inherit from Array.prototype which provides to them a handful of convenient methods to manipulate arrays like indexOf (searching a value in the array) or push (adding an element to the array), etc. This makes arrays a perfect candidate to represent lists or sets.


#### More details about data types in JavaScript:

- [JavaScript data types and data structures - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [A Beginner’s Guide to JavaScript Variables and Datatypes - SitePoint](https://www.sitepoint.com/beginners-guide-javascript-variables-and-datatypes/)
- [JavaScript Cheat Sheet](https://www.interviewbit.com/javascript-cheat-sheet)

#### Object Oriented Programming in JavaScript

- [Introduction to Object-Oriented JavaScript - Mozilla Developer Network](https://developer.mozilla.org/ms/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- [OOP In JavaScript: What You NEED to Know - JavaScript is sexy](http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/)

### Big-O Notation and Time Complexity Analysis

[Algorithms in plain English: time complexity and Big-O notation](https://medium.freecodecamp.com/time-is-complex-but-priceless-f0abd015063c)
[Big-O Cheat Sheet Link](http://bigocheatsheet.com/)
[A beginner's guide to big-O notation](https://rob-bell.net/2009/06/a-beginners-guide-to-big-o-notation/)

### How to Use
The easiest way to run and test the codes from this repository is to use [nodejs](https://nodejs.org/en/) (I have checked my code using nodejs v6.5.0 in an Windows machine).

Install it in your machine and add it to your environment path so that it is accessible in terminal commands.

Then you can run a JavaScript file like this:
```javascript
node file.js
```

### ES6/ES2015 implementations
There are ES6 implementations of the Data Structures and Algorithms in their respective folders within a separate folder named `es6`.
Couple of things to notice here:
* There are no true **private properties** available in ES6 yet. So, in classes no [workarounds or hacks](http://2ality.com/2016/01/private-data-classes.html) used to implement private properties. There are several [proposals](https://github.com/wycats/javascript-private-state) and initiative ongoing to introduce it in ECMAScript. Hoping that would be done soon and we will then add it in our code.
* We tried to implement the data structures and some algorithms in separate modules so that they can be used independently in any other codes. While `import` is indeed [part of ES6](http://2ality.com/2014/09/es6-modules-final.html), it is unfortunately not yet supported by any native environments, Node or browser. Until the native support introduced the easy workaround is to stick with the old **CommonJS Module format**(Which is supported in NodeJS and as we [advised earlier to test our codes in NodeJS](#how-to-use), so we are sticking with it). The modules will be [exported using CommonJS Module format and imported by 'require'](http://openmymind.net/2012/2/3/Node-Require-and-Exports/).
Though there are other ways like `Babel`, `Rollup` etc., but that need some build configurations(And we don't want to make our codes more complicated). And at the end babel will convert the code to `require` and `module.exports` anyway.

### FAQ
- *Why you didn't use prototype methods in Objects?*

    => Well, we could've. But before argue on that, you might want to read [this nice article](https://www.thecodeship.com/web-development/methods-within-constructor-vs-prototype-in-javascript/). We chose to follow the philosophy described on that article. But still, you can easily rewrite the codes of this repository using 'prototypal methods' for your own use. 


### Useful Links:
* [Eloquent JavaScript](http://eloquentjavascript.net/)
* [Speaking JS](http://speakingjs.com/es5/index.html)
* [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
* [JavaScript - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
* [Algorithms, 4th Edition (book by: Robert Sedgewick and Kevin Wayne)](http://algs4.cs.princeton.edu/home/)
* [Scaler Topics](https://www.scaler.com/topics/)
* [Khan Academy tutorial on Algorithms](https://www.khanacademy.org/computing/computer-science/algorithms)
* [Topcoder Tutorials](https://www.topcoder.com/community/data-science/data-science-tutorials/)
* [GeeksforGeeks](http://www.geeksforgeeks.org/)
* [hackerearth Tutorial](https://www.hackerearth.com/practice/)
* [interviewbit](https://www.interviewbit.com/courses/programming/)
