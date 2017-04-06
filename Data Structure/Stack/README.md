# Stack

A **stack** is an Abstract Data Type (ADT), commonly used in most programming languages. It is named stack as it behaves like a real-world stack, for example – a deck of cards or a pile of plates, etc.

A real-world stack allows operations at one end only. For example, we can place or remove a card or plate from the top of the stack only. Likewise, Stack ADT allows all data operations at one end only. At any given time, we can only access the top element of a stack.

This feature makes it LIFO data structure. LIFO stands for Last-in-first-out. Here, the element which is placed (inserted or added) last, is accessed first. In stack terminology, insertion operation is called PUSH operation and removal operation is called POP operation.


Conceptually, a stack is simple: a data structure that allows adding and removing elements in a particular order. Every time an element is added, it goes on the top of the stack; the only element that can be removed is the element that was at the top of the stack. Consequently, a stack is said to have "first in last out" behavior (or "last in, first out"). The first item added to a stack will be the last item removed from a stack.

![Stack](stack.svg)

**Basic Operations:**

Stack operations may involve initializing the stack, using it and then de-initializing it. Apart from these basic stuffs, a stack is used for the following two primary operations −

- **push()** − Pushing (storing) an element on the stack.
- **pop()** − Removing (accessing) an element from the stack.

To use a stack efficiently, we need to check the status of stack as well. For the same purpose, the following functionality are available too −

- **peek()** − get the top data element of the stack, without removing it.
- **isEmpty()** − check if stack is empty.


#### Complexity Analysis
- Insertion - O(1)
- Deletion - O(1)
- Access - O(n)
- Search - O(n)


### More on this topic
- https://en.wikipedia.org/wiki/Stack_(abstract_data_type)
- https://www.tutorialspoint.com/data_structures_algorithms/stack_algorithm.htm
- https://en.wikibooks.org/wiki/Data_Structures/Stacks_and_Queues
