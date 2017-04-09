# Binary Search Tree (BST)

A **Binary Search Tree (BST)** is a tree in which all the nodes follow the below-mentioned properties −

- The left subtree of a node contains only nodes with keys less than the node’s key.
- The right subtree of a node contains only nodes with keys greater than the node’s key.
- The left and right subtree each must also be a binary search tree.

BST is a collection of nodes arranged in a way where they maintain BST properties. Each node has a key and an associated value. While searching, the desired key is compared to the keys in BST and if found, the associated value is retrieved.

![BST](./images/binary_search_tree.jpg)

**Basic Operations:**

Following are the basic operations of a tree −

- **Search** − Searches an element in a tree.
- **Insert** − Inserts an element in a tree.
- **Pre-order Traversal** − Traverses a tree in a pre-order manner.
- **In-order Traversal** − Traverses a tree in an in-order manner.
- **Post-order Traversal** − Traverses a tree in a post-order manner.

##### Search Operation

To search a given key in Binary Search Tree, we first compare it with root, if the key is present at root, we return root. If key is greater than root’s key, we recur for right subtree of root node. Otherwise we recur for left subtree.

![BST Search](./images/bst_search.png)

##### Insertion

Whenever an element is to be inserted, first locate its proper location. Start searching from the root node, then if the data is less than the key value, search for the empty location in the left subtree and insert the data. Otherwise, search for the empty location in the right subtree and insert the data.

![BST Insert](./images/bst_insert.png)

##### Deletion

When we delete a node, there possibilities arise.
- **Node to be deleted is leaf:** Simply remove from the tree.

![BST Remove-1](./images/bst-remove-case-1.png)

- **Node to be deleted has only one child:** Copy the child to the node and delete the child.

![BST Remove-2-1](./images/bst-remove-case-2-1.png)
![BST Remove-2-2](./images/bst-remove-case-2-2.png)
![BST Remove-2-3](./images/bst-remove-case-2-3.png)

- **Node to be deleted has two children:** Find inorder successor of the node. Copy contents of the inorder successor to the node and delete the inorder successor.

![BST Remove-3-3](./images/bst-remove-case-3-3.png)
![BST Remove-3-4](./images/bst-remove-case-3-4.png)
![BST Remove-3-5](./images/bst-remove-case-3-5.png)
![BST Remove-3-6](./images/bst-remove-case-3-6.png)

#### Complexity Analysis
- Insertion - O(log n)
- Deletion - O(log n)
- Access - O(log n)
- Search - O(log n)

### More on this topic
- https://www.tutorialspoint.com/data_structures_algorithms/binary_search_tree.htm
- http://www.algolist.net/Data_structures/Binary_search_tree
- http://quiz.geeksforgeeks.org/binary-search-tree-set-1-search-and-insertion/
- http://quiz.geeksforgeeks.org/binary-search-tree-set-2-delete/
- https://en.wikibooks.org/wiki/Data_Structures/Trees#Binary_Search_Trees
