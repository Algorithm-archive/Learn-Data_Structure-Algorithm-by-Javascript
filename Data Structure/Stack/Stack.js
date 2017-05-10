/*
    Stack Implementation in Javascript
*/

//Stack Class
function Stack() {
	var items = []; //Items list is private data

	this.push = function(element) {
		items.push(element);
	}

	this.pop = function() {
		return items.pop();
	}

	this.peek = function() {
		return items[items.length - 1];
	}

	this.isEmpty = function() {
		return items.length === 0;
	}

	this.printAll = function() {
		console.log(items.toString());
	}
}

/***************** Testing the Stack ***************/
var stack = new Stack();
stack.push(10);
stack.push(15);
console.log(stack.isEmpty());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.isEmpty());
