/***************** Testing the Stack ***************/
const Stack = require('./Stack'); //importing the Stack Module

const stack = new Stack;
stack.push(10);
stack.push(15);
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
