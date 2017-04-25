/* This example and code taken from 'Learning Javascript Data Structures and Algorithms - Loiane Groner'

N.B.: This implementation is a very naive approach to Priority Queue. This requires O(n) worst case complexity in Insertion. Generally Priority Queues are implemented by HEAP, another popular data structure, which can be found in the respective section of this repository.
*/

//PriorityQueue Class
function PriorityQueue() {
	var items = [];

	function QueueElement(element, priority) {
		this.element = element;
		this.priority = priority;
	}

	this.enqueue = function(element, priority) {
		var queueElement = new QueueElement(element, priority);

		if (this.isEmpty()) {
			items.push(queueElement);
		} else {
			var added = false;
			for (var i = 0; i < items.length; i++) {
				if (queueElement.priority < items[i].priority) {
					items.splice(i, 0, queueElement);
					added = true;
					break;
				}
			}
			if (!added) {
				items.push(queueElement);
			}
		}

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

/********************** Testing the Priority Queue **********************/
var queue = new PriorityQueue();

queue.enqueue("John", 2);
queue.enqueue("Jack", 1);
queue.enqueue("Camila", 1);
console.log(queue.isEmpty());
console.log(queue.dequeue());
