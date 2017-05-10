/*
    Stack Implementation in ES6
*/

class Stack {
	constructor() {
		this._items = []; //Not exactly a private property
	}

	push(element) {
		this._items.push(element);
	}

	pop() {
		return this._items.pop();
	}

	peek() {
		return this._items[this._items.length - 1];
	}

	isEmpty() {
		return this._items.length === 0;
	}

	printAll() {
		console.log(this._items.toString());
	}
}

module.exports = Stack; //exporting the Stack module using CommonJS Module format
