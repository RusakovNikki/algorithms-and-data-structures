/**
 * На вход два массива: a и b
 * В массиве b элементы, если такие имеются, из массива a будут расположены ровно в той же последовательности
 * Пример:
 * a = ["a", "b", "c"]
 * b = ["u", "a", "b", "q", "d"]
 */

class QueueNode {
  constructor(nodeNext, nodePrev, value) {
    this.next = nodeNext;
    this.prev = nodePrev;
    this.value = value;
  }
}

class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  push(value) {
    const queueNode = new QueueNode(null, null, value);
    if (this.head === null) {
      this.head = queueNode;
      this.tail = queueNode;
      return;
    }

    this.tail.next = queueNode;
    queueNode.prev = this.tail;
    this.tail = queueNode;
  }

  popFront() {
    const headValue = this.head.value;
    if (this.head === null) {
      return null;
    }
    if (this.head.next === null) {
      this.head = null;
      this.tail = null;
      return null;
    }
    this.head.next.prev = null;
    this.head = this.head.next ?? null;

    return headValue;
  }

  peek() {
    return this.head.value;
  }
}

const isSubsequence = (arrayA, arrayB) => {
  const queue = new Queue();
  arrayA.forEach((element) => {
    queue.push(element);
  });

  arrayB.forEach((element) => {
    if (element === queue.peek()) {
      queue.popFront();
    }
  });

  if (queue.head === null) {
    return true;
  }
  return false;
};

console.log(isSubsequence(["b", "q", "w"], ["b", "a", "b", "q", "c", "w"]));
