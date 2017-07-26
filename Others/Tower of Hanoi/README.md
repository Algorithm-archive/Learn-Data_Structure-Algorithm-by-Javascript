# Tower of Hanoi Problem

**Tower of Hanoi** is a mathematical puzzle where we have three rods and n disks. The objective of the puzzle is to move the entire stack to another rod, obeying the following simple rules:
1. Only one disk can be moved at a time.
2. Each move consists of taking the upper disk from one of the stacks and placing it on top of another stack i.e. a disk can only be moved if it is the uppermost disk on a stack.
3. No disk can be placed on top of a smaller disk.

![Tower of Hanoi](./images/tower_of_hanoi.jpg)


---
### Solution

To solve the problem, first we need to learn how to solve this problem with lesser amount of disks, say → 1 or 2. We mark three towers with name: **source**, **destination** and **aux** (only to help moving the disks). If we have only one disk, then it can easily be moved from source to destination peg.

If we have 2 disks −

- First, we move the smaller (top) disk to aux peg.
- Then, we move the larger (bottom) disk to destination peg.
- And finally, we move the smaller disk from aux to destination peg.

![Tower of Hanoi for two disks](./images/tower_of_hanoi_two_disks.gif)

So now, we are in a position to design an algorithm for Tower of Hanoi with more than two disks. We divide the stack of disks in two parts. The largest disk (nth disk) is in one part and all other (n-1) disks are in the second part.

Our ultimate aim is to move disk n from source to destination and then put all other (n - 1) disks onto it. We can imagine to apply the same in a recursive way for all given set of disks.

The steps to follow are −

- Step 1 − Move n-1 disks from **source** to **aux**
- Step 2 − Move n<sup>th</sup> disk from **source** to **dest**
- Step 3 − Move n-1 disks from **aux** to **dest**

Image illustration for 3 disks :

![Tower of Hanoi solution for 3 disks](http://mathforum.org/dr.math/faq/faq.disk3.gif)

With 3 disks, the puzzle can be solved in 7 moves. The minimal number of moves required to solve a Tower of Hanoi puzzle is 2<sup>n</sup> − 1, where n is the number of disks.

An animated visualization for 3 disks:

![Tower of Hanoi GIF](./images/tower_of_hanoi.gif)

### More on this topic
- [Tower of Hanoi - Wikipedia](https://en.wikipedia.org/wiki/Tower_of_Hanoi)
- [Tower of Hanoi - khanacademy](https://www.khanacademy.org/computing/computer-science/algorithms/towers-of-hanoi/a/towers-of-hanoi)
- [Tower of Hanoi - Tutorialspoint](https://www.tutorialspoint.com/data_structures_algorithms/tower_of_hanoi.htm)
- [Tower of Hanoi - GeeksforGeeks](http://www.geeksforgeeks.org/c-program-for-tower-of-hanoi/)
