/*
    Queue implementation in JavaScript
*/

class Queue {
	constructor() {
		this._items = []; //Not exactly a private property
	}

	enqueue(element) {
		this._items.push(element);
	}

	dequeue() {
		return this._items.shift();
	}

	peek() {
		return this._items[0];
	}

	isEmpty() {
		return this._items.length === 0;
	}

	printAll() {
		console.log(this._items.toString());
	}
}

module.exports = Queue; //exporting the Queue module using CommonJS Module format
