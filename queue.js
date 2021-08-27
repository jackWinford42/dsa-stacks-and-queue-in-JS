/** Node: node for a queue. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    // creates a new node
    let node = new Node(val);
  
    // if queue is Empty add the
    // element and make it first
    if (this.first === null) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = this.last.next;
    }
    this.size++;
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    if (this.size === 0) {
      throw new Error;
    } else {
      let returnNode;

      returnNode = this.first;
      this.first = this.first.next;
      this.size--;

      //reset queue if it is now empty
      if (!this.size) {
        this.first = null;
        this.last = null;
      }
      return returnNode.val;
    }
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    if (this.size === 0) {
      return console.log("linked-list is empty");
    } else {
      return this.first.val;
    }
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return !this.size
  }
}

module.exports = Queue;
