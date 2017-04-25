/*
    Binary Search Tree Implementation in Javascript
*/

//Binary Search Tree Class
function BinarySearchTree() {

	var Node = function(data) {
		this.data = data; //data
		this.left = null; //pointer to the left node
		this.right = null; //pointer to the right node
	}

	var root = null; //Root Node of the Binary Search Tree

	this.getRoot = function() {
		return root;
	}

	//Function to call for inserting a Node in the Tree
	this.insert = function(data) {
		var newNode = new Node(data);

		if (root === null) //for the very first Node insertion in the Tree
			root = newNode;
		else
			insertNode(root, newNode);
	}

	//Helper function for the above 'insert' method
	var insertNode = function(node, newNode) {
		if (newNode.data <= node.data) { //Node should be inserted in the left sub-tree
			if (node.left === null)
				node.left = newNode;
			else
				insertNode(node.left, newNode);
		} else { //Node should be inserted in the right sub-tree
			if (node.right === null)
				node.right = newNode;
			else
				insertNode(node.right, newNode);
		}
	}

	//In-order Traversal Printing of the Tree
	this.inOrderTraverse = function(node) {
		if (node !== null) {
			this.inOrderTraverse(node.left);
			console.log(node.data);
			this.inOrderTraverse(node.right);
		}
	}

	//Pre-order Traversal Printing of the Tree
	this.preOrderTraverse = function(node) {
		if (node !== null) {
			console.log(node.data);
			this.preOrderTraverse(node.left);
			this.preOrderTraverse(node.right);
		}
	}

	//Post-order Traversal Printing of the Tree
	this.postOrderTraverse = function(node) {
		if (node !== null) {
			this.postOrderTraverse(node.left);
			this.postOrderTraverse(node.right);
			console.log(node.data);
		}
	}

	//Find the Node with the Minimum value in the Tree
	this.findMinNode = function(node) {
		if (node === null || node.left === null)
			return node;

		return this.findMinNode(node.left);
	}

	//Find the Node with the Maximum value in the Tree
	this.findMaxNode = function(node) {
		if (node === null || node.right === null)
			return node;

		return this.findMaxNode(node.right);
	}

	//Search a Node with the given 'data' in the Tree
	this.searchOnTree = function(node, data) {
		if (node === null)
			return false;

		if (data < node.data)
			return this.searchOnTree(node.left, data);
		else if (data > node.data)
			return this.searchOnTree(node.right, data);
		else
			return true;
	}

	//Delete a Node from the Tree with the given 'data'
	this.removeNode = function(node, data) {
		if (node === null) return null; // empty tree

		if (data < node.data) { // value is less than node's number. so go to left subtree
			node.left = this.removeNode(node.left, data);
		} else if (data > node.data) { // value is greater than node's number. so go to right subtree
			node.right = this.removeNode(node.right, data);
		} else { // node found. Let's delete it!

			if (node.left === null && node.rigth === null) //node has no child
				node = null;
			else if (node.left === null) // node has only right child
				node = node.right;
			else if (node.right === null) // node has only left child
				node = node.left;
			else { // node has two children
				var tmp = this.findMinNode(node.right);
				node.data = tmp.data;
				node.right = this.removeNode(node.right, tmp.data);
			}
		}

		return node;
	}
}



/******************** Testing Binary Search Tree Code *********************/

var arr = [5, 2, 17, 6, 20];
var len = arr.length;

var bst = new BinarySearchTree();

for (var i = 0; i < len; i++) {
	bst.insert(arr[i]);
}

console.log("InOrder Tree printing: ");
bst.inOrderTraverse(bst.getRoot());

console.log("PreOrder Tree printing: ");
bst.preOrderTraverse(bst.getRoot());

console.log("PostOrder Tree printing: ");
bst.postOrderTraverse(bst.getRoot());

console.log('value 70 exists in the tree? ');
console.log('=>', bst.searchOnTree(bst.getRoot(), 70));
console.log('value 17 exists in the tree? ');
console.log('=>', bst.searchOnTree(bst.getRoot(), 17));
console.log('value 100 exists in the tree? ');
console.log('=>', bst.searchOnTree(bst.getRoot(), 100));


var removedNode = bst.removeNode(bst.getRoot(), 5);
if (removedNode === null) {
	console.log('Node with value 5 not exists in the tree');
} else {
	console.log('Node with value 5 deleted from the tree');
}

console.log("In-order Tree printing: ");
bst.inOrderTraverse(bst.getRoot());
