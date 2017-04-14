/**
  Doubly LinkedList Implementation in Javascript
**/

/* Doubly LinkedList class */
function DoublyLinkedList() {

	/* Node class for a single Node */
	var Node = function(data, next, prev) {
		this.data = data; // Data in Node
		this.next = next; // Pointer to Next Node
		this.prev = prev; // Pointer to the Previous Node
	}

	this.head = null; // Pointer to the first item in the list
	this.length = 0; //number of datas in the Linked List


	/* Add new data at the front of the Linked List */
	this.insert = function(data) {
		var newNode = new Node(data, this.head, null); //Create new Node pointing 'next' to the existing 'Head', previous to the null- because it will be at the front
		if (this.head !== null) // Update the previous Heads prev to new Node if there was at least one Node already exists
			this.head.prev = newNode;

		this.head = newNode; // and make it the new 'Head'
		this.length++;
	}


	/* Add new data at the end of the Linked List */
	this.append = function(data) {
		// no data added yet to the list, just add the new node at the head
		if (this.head === null)
			this.insert(data);
		else { // traverse the list to reach at the end of the list and add the new item at the last
			var current = this.head;
			while (current.next !== null) {
				current = current.next;
			}

			current.next = new Node(data, null, current); // As the last Node it's previous Node will be the current Last Node and next Node will be null
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

		if (position === 0) { //Inserting at the front
			this.insert(data);
		} else { //Otherwise traverse to the right position and add it there
			while (current !== null && count < (position - 1)) {
				current = current.next;
				count++;
			}

			var newNode = new Node(data, current.next, current); //create a new Node

			if (current.next !== null) //If not inserting at the last position
				current.next.prev = newNode;
			current.next = newNode;
		}

		this.length++;
	}


	/* Remove an item from the front */
	this.removeFromFront = function() {
		if (this.isEmpty()) { //No value in the linkedList
			console.log("List is empty");
			return null;
		} else { //To remove the item copy the value in an temporary variable and point the current Head to the next data
			var item = this.head.data;
			this.head = this.head.next;
			if (this.head !== null) // If there was more than one Node
				this.head.prev = null; // Set the updated Head's previous Node null to remove the previous reference
			this.length--;
			return item;
		}
	}


	/* Remove an item from the Last */
	this.removeFromEnd = function() {
		if (this.isEmpty()) { //No value in the linkedList
			console.log("List is empty");
			return null;
		} else {
			var item;
			if (this.length === 1) { // if there is only one Node
				item = this.head.data;
				this.head = null;
			} else {
				var current = this.head; //current will track the running item till the last

				while (current.next !== null) {
					current = current.next;
				}

				item = current.data;
				var prev = current.prev; // Get the just previous Node of the last Node
				current.prev.next = null; //Set null to that previous Node to dereference the last Node
			}

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
		} else {
			var count = 0,
				current = this.head;

			while (current !== null && count < position) {
				current = current.next;
				count++;
			}

			var item = current.data;
			var prev = current.prev;
			prev.next = current.next;

			if (current.next !== null) // if removed Node is not the Last Node
				current.next.prev = prev;

			this.length--;

			return item;
		}
	}


	/* Remove an item using the given value. Only the first occurence of the data will be deleted */
	this.remove = function(data) {
		if (this.isEmpty()) { //No value in the linkedList
			console.log("List is empty");
			return null;
		}

		var current = this.head;

		while (current !== null) {
			if (current.data === data) break;

			current = current.next;
		}

		if (current === null) { //Given data not found in the list
			console.log("Error! Data not found");
			return null;
		}

		if (current.prev === null) { //Data found in the head of the List
			return this.removeFromFront();
		}

		//Data found in a position other than first
		var item = current.data;
		var prev = current.prev;
		prev.next = current.next;

		if (current.next !== null) // if removed Node is not the Last Node
			current.next.prev = prev;

		this.length--;

		return item;
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

linkedList = new DoublyLinkedList(); //Creating a List

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
linkedList.insertAt(1, 5); //inserting at the end of the linkedList
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
console.log("Removed Data: ", linkedList.remove(50)); //remove an item matching with the given value
linkedList.showAll();
