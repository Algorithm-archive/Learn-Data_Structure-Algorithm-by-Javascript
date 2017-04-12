/**
  LinkedList Implementation in Javascript
**/

/* LinkedList class */
function LinkedList() {

	/* Node class for a single Node */
	var Node = function(data, next) {
		this.data = data; // Data in Node
		this.next = next; // Pointer to Next Node
	}

	this.head = null; // Pointer to the first item in the list
	this.length = 0; //number of datas in the Linked List


	/* Add new data at the front of the Linked List */
	this.insert = function(data) {
		this.head = new Node(data, this.head); //Create new Node pointing 'next' to the existing 'Head' and make it the new 'Head'
		this.length++;
	}


	/* Add new data at the end of the Linked List */
	this.append = function(data) {
		// no data added yet to the list, just add the new node at the head
		if (this.head === null)
			this.insert(data);
		else { // traverse the list to reach at the end of the list and add the new item at the last
			var current = this.head;
			while (current.next) {
				current = current.next;
			}

			current.next = new Node(data, null);
			this.length++;
		}
	}


	/* Add new data at the specified 'position' of the Linked List. 0-based position index. */
	this.insertAt = function(position, data) {
		if (position > this.length || position < 0) {
			console.log("Error! Invalid Position Given");
			return;
		}

		var count = 0,
			current = this.head;

		var newNode = new Node(data, null); //create a new Node

		//If the node needs to be at first position just pointing it's next to the Head and making it the new Head would be enough
		if (position === 0) {
			newNode.next = this.head;
			this.head = newNode;
		} else { //Otherwise traverse to the right position and add it there
			while (current !== null && count < (position - 1)) {
				current = current.next;
				count++;
			}

			newNode.next = current.next;
			current.next = newNode;
		}

		this.length++;
	}


	/* Remove an item from the front */
	this.removeFromFront = function() {
		if (this.isEmpty()) { //No value in the linkedList
			return null;
		} else { //To remove the item copy the value in an temporary variable and point the current Head to the next data
			var item = this.head.data;
			this.head = this.head.next;
			this.length--;
			return item;
		}
	}


	/* Remove an item from the Last */
	this.removeFromEnd = function() {
		if (this.isEmpty()) { //No value in the linkedList
			return null;
		} else { //To remove the item from the End we need to track Two reference and traverse to the last
			var prev = null, //prev will track the immediate previous value till the last
				current = this.head; //current will track the running item till the last

			while (current.next !== null) {
				prev = current;
				current = current.next;
			}

			var item = current.data;
			prev.next = null; //Dereference the previous Node before the Last Node
			this.length--;
			return item;
		}
	}


	/* Remove an item from any position */
	this.removeAt = function(position) {
		if (position >= this.length || position < 0) {
			console.log("Error! Invalid Position Given");
			return null;
		}

		if (position === 0) { //remove the first item of the list
			return this.removeFromFront();
		} else { //To remove the item from the position we need to traverse with two reference till that position and rmove the element
			var count = 0,
				prev = null;
			current = this.head;

			while (current !== null && count < position) {
				prev = current;
				current = current.next;
				count++;
			}

			var item = current.data;
			prev.next = current.next; //Setting the previous nodes next to the current nodes next means the current node is not referenced anymore by any node
			this.length--;
			return item;
		}
	}


	/* Checks if the list is empty */
	this.isEmpty = function() {
		return this.head === null; //Can also be checked by the 'this.length' value
	}


	/* Find an data in the list. This method will return only true or false for the existence of the data */
	this.find = function(data) {
		var node = this.head;
		//Traverse every node to match with the given data
		while (node !== null) {
			if (node.data === data) {
				return true;
			}
			node = node.next;
		}
		return false;
	}


	/* Returns the number of items in the Linked List */
	this.size = function() {
		return this.length;
	}

	/* Make the entire linkedList empty */
	this.clear = function() {
		this.head = null; //Dereferncing the head will lose track of the whole list
		this.length = 0;
	}


	/* Print the list of the items in console */
	this.showAll = function() {
		console.log("Elements in the Linked List are: ");
		var node = this.head;
		while (node !== null) {
			console.log(node.data);
			node = node.next;
		}
		console.log("-----------");
	}
}



/******************************* Testing LinkedList ************************/

linkedList = new LinkedList(); //Creating a List

linkedList.insert(10); //insert at front
linkedList.insert(15); //insert at front
linkedList.showAll(); //print the list
linkedList.append(20); //insert at the end
linkedList.append(50); //insert at the end
linkedList.insert(5); //insert at front
linkedList.showAll(); //print the list

console.log("Total Item in the List: ", linkedList.size()); //print the number of datas in the list
linkedList.clear(); //clear the list

linkedList.insertAt(1, 10); //inserting to an invalid position
linkedList.insertAt(0, 10); //inserting at the front of the linkedList
linkedList.showAll();
linkedList.insertAt(1, 5); //inserting at he end of the linkedList
linkedList.showAll();
linkedList.insertAt(1, 2); //inserting at a middle position
linkedList.showAll();
linkedList.insertAt(1, 50); //inserting at a middle position
linkedList.showAll();

console.log(linkedList.find(2)); //Search for a valid item
console.log(linkedList.find(100)); //Search for an invalid item

console.log("Removed Data: ", linkedList.removeFromFront()); //remove an item from the front
linkedList.showAll();
console.log("Removed Data: ", linkedList.removeFromEnd()); //remove an item from the back
linkedList.showAll();
console.log("Removed Data: ", linkedList.removeAt(1)); //remove an item from the back
linkedList.showAll();
