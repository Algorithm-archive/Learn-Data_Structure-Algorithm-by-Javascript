# Linked List

A **linked list** is a linear data structure where each element is a separate object.
Each element (known as *node*) of a list is comprising of two items - the data and a reference to the next node. The last node has a reference to null. The entry point into a linked list is called the head of the list. It should be noted that head is not a separate node, but the reference to the first node. If the list is empty then the head is a null reference.

![Linked List](linked-list.png)

A linked list is a dynamic data structure. The number of nodes in a list is not fixed and can grow and shrink on demand. Any application which has to deal with an unknown number of objects can use a linked list.


**Basic Operations:**

Following are the basic operations supported by a list.

* **Insertion** − Adds an element at the beginning of the list.

* **Deletion** − Deletes an element at the beginning of the list.

* **Display** − Displays the complete list.

* **Search** − Searches an element using the given key.

* **Delete** − Deletes an element using the given key.


#### Complexity Analysis
- Search - O(n)
- Insertion - O(1)
- Deletion - O(1) (Deletion from beginning)
- Deletion in middle - Searching O(n) and deleting O(1)
- Space - O(n)

#### Array vs Linked List
http://www.geeksforgeeks.org/linked-list-vs-array/

### More on this topic
- https://en.wikipedia.org/wiki/Linked_list
- https://www.hackerearth.com/practice/data-structures/linked-list/singly-linked-list/tutorial/
- https://www.tutorialspoint.com/data_structures_algorithms/linked_list_algorithms.htm
