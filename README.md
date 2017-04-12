# Introduction

**You need to have basic understanding of the Javascript programming language to proceed with the codes from this repository.**

---

JavaScript is a **loosely typed** or a **dynamic language**. That means you don't have to declare the type of a variable ahead of time. The type will get determined automatically while the program is being processed. That also means that you can have the same variable as different types:
```javascript
var foo = 42;    // foo is now a Number
var foo = 'bar'; // foo is now a String
var foo = true;  // foo is now a Boolean
```

### Data Types in Javascript
The latest ECMAScript standard defines seven data types:

- Six data types that are primitives:

  - Boolean (`true` and `false`)
  - Null (invalid object or address has the value `null`)
  - Undefined (a variable that has not been assigned a value has the value `undefined`)
  - Number (integer and floating point values ranging from  -(2<sup>53</sup> -1) to (2<sup>53</sup> -1), +Infinity, -Infinity and NaN(not-a-number) )
  - String (Sequence of textual characters. Strings are immutable in Javascript)
  - [Symbol](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol) (new in ECMAScript 6)

and
- [Object](https://www.w3schools.com/js/js_object_definition.asp)

#### Arrays
Javascript **Arrays** are regular objects for which there is a particular relationship between integer-key-ed properties and the 'length' property. Additionally, arrays inherit from Array.prototype which provides to them a handful of convenient methods to manipulate arrays like indexOf (searching a value in the array) or push (adding an element to the array), etc. This makes arrays a perfect candidate to represent lists or sets.


#### More details about data types in Javascript:

- [JavaScript data types and data structures - Mozilla Developer Network](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures)
- [A Beginner’s Guide to JavaScript Variables and Datatypes - SitePoint](https://www.sitepoint.com/beginners-guide-javascript-variables-and-datatypes/)

#### Object Oriented Programming in Javascript

- [Introduction to Object-Oriented JavaScript - Mozilla Developer Network](https://developer.mozilla.org/ms/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript)
- [OOP In JavaScript: What You NEED to Know - Javascript is sexy](http://javascriptissexy.com/oop-in-javascript-what-you-need-to-know/)

### Big-O Cheat Sheet

[Big-O Cheat Sheet Link](http://bigocheatsheet.com/)

### How to Use
The easiest way to run and test the codes from this repository is to use [nodejs](https://nodejs.org/en/).
Install it in your machine and add it to your environment path so that it is accessible in terminal commands.

Then you can run a Javascript file like this:
```javascript
node file.js
```

### Useful Links:
* [Eloquent Javascript](http://eloquentjavascript.net/)
* [Speaking JS](http://speakingjs.com/es5/index.html)
* [You-Dont-Know-JS](https://github.com/getify/You-Dont-Know-JS)
* [Algorithms, 4th Edition (book by: Robert Sedgewick and Kevin Wayne)](http://algs4.cs.princeton.edu/home/)

---

# Table of Contents

- [Data Structure](./Data Structure/)
  - [Linked List](./Data Structure/Linked List/)
  - [Stack](./Data Structure/Stack/)
  - [Queue](./Data Structure/Queue/)
  - [BST](./Data Structure/BST/)


- [Searching](./Searching/)
  - [Linear Search](./Searching/Linear Search/)
  - [Binary Search](./Searching/Binary Search/)
  - [Ternary Search](./Searching/Ternary Search/)


- [Sorting](./Sorting/)
  - [Selection Sort](./Sorting/Selection Sort/)
  - [Bubble Sort](./Sorting/Bubble Sort/)
  - [Insertion Sort](./Sorting/Insertion Sort/)
  - [Merge Sort](./Sorting/Merge Sort/)
  - [Quick Sort](./Sorting/Quick Sort/)
