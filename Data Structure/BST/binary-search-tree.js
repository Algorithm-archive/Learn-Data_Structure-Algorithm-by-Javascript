// Binary Search Tree Implementation
function BinarySearchTree(){

    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }

    var root = null;

    this.getRoot = function(){
        return root;
    }

    this.insert = function(key){
        var newNode = new Node(key);

        if(root == null)
            root = newNode;
        else
            insertNode(root, newNode);
    }

    var insertNode = function(node, newNode){
        if(newNode.key <= node.key){
            if(node.left === null)
                node.left = newNode;
            else
                insertNode(node.left, newNode);
        }
        else{
            if(node.right === null)
                node.right = newNode;
            else
                insertNode(node.right, newNode);
        }
    }

    this.inOrderTraverse = function(node){
        if(node !== null){
            this.inOrderTraverse(node.left);
            console.log(node.key);
            this.inOrderTraverse(node.right);
        }
    }

    this.preOrderTraverse = function(node){
        if(node !== null){
            console.log(node.key);
            this.preOrderTraverse(node.left);
            this.preOrderTraverse(node.right);
        }
    }

    this.postOrderTraverse = function(node){
        if(node !== null){
            this.postOrderTraverse(node.left);
            this.postOrderTraverse(node.right);
            console.log(node.key);
        }
    }

    this.findMinNode = function(node){
        if(node === null || node.left === null)
            return node;

        return this.findMinNode(node.left);
    }

    this.findMaxNode = function(node){
        if(node === null || node.right === null)
            return node;

        return this.findMaxNode(node.right);
    }

    this.searchOnTree = function(node, key){
        if(node === null)
            return false;

        if(key < node.key)
            return searchOnTree(node.left, key);
        else if(key > node.key)
            return searchOnTree(node.right, key);
        else
            return true;
    }

    this.removeNode = function(node, key){
        if(node === null) return null; // empty tree

        if(key < node.key){ // value is less than node's number. so go to left subtree
            node.left = this.removeNode(node.left, key);
        }
        else if(key > node.key){ // value is greater than node's number. so go to right subtree
            node.right = this.removeNode(node.right, key);
        }
        else{ // node found. Let's delete it!

            if(node.left === null && node.rigth === null) //node has no child
                node = null;
            else if(node.left === null) // node has only right child
                node = node.right;
            else if(node.right === null) // node has only left child
                node = node.left;
            else{ // node has two children
                var tmp = this.findMinNode(node.right);
                node.key = tmp.key;
                node.right = this.removeNode(node.right, tmp.key);
            }
        }

        return node;
    }
}



/******************** Testing Binary Search Tree Code *********************/

var arr = [5, 2, 17, 6, 20];
var len = arr.length;

var bst = new BinarySearchTree();

for(var i=0;i<len;i++){
    bst.insert(arr[i]);
}

console.log("In-order Tree printing: ");
bst.inOrderTraverse(bst.getRoot());

console.log(bst.searchOnTree(70));
console.log(bst.searchOnTree(100));

bst.removeNode(bst.getRoot(), 5);

console.log("In-order Tree printing: ");
bst.inOrderTraverse(bst.getRoot());
