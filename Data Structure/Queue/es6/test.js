/**************** Testing the Queue ***************/
const Queue = require('./Queue');

const queue = new Queue;
queue.enqueue(10);
queue.enqueue(15);
console.log(queue.isEmpty());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.dequeue());
console.log(queue.isEmpty());
