class DequeNode {
  constructor(node, nodePrev, value) {
    this.value = value;
    this.next = node;
    this.prev = nodePrev;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  getDequeHead() {
    return this.head;
  }

  getDequeTail() {
    return this.tail;
  }

  pushFront(value) {
    const dequeNode = new DequeNode(null, null, value);
    if (this.head === null) {
      this.head = dequeNode;
      this.tail = dequeNode;
      return;
    }

    dequeNode.next = this.head;
    this.head.prev = dequeNode;
    this.head = dequeNode;
  }

  popBack() {
    const deleteNode = this.tail;
    if (this.tail === null) {
      return null;
    }
    if (this.tail.prev === null) {
      this.head = this.tail = null;
    } else {
      this.tail = this.tail.prev;
      this.tail.next = null;
    }
    return deleteNode.value;
  }
}

const deque = new Deque();
deque.pushFront(5);
deque.pushFront(4);
deque.pushFront(3);
deque.pushFront(2);
deque.pushFront(1);

console.log(deque.popBack());
console.log(deque.popBack());
console.log(deque.popBack());

console.log(deque.getDequeHead());
console.log(deque.getDequeTail());
