/*
    Queue implementation in JavaScript
*/

//Queue Class
function Queue() {
	var items = []; //Items list is private data

	this.enqueue = function(element) {
		items.push(element);
	}

	this.dequeue = function() {
		return items.shift();
	}

	this.peek = function() {
		return items[0];
	}

	this.isEmpty = function() {
		return items.length === 0;
	}
}

/**************** Testing the Queue ***************/
var queue = new Queue();

queue.enqueue(10);
queue.enqueue(15);
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
