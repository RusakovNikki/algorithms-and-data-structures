class LinkedListNode {
  constructor(nodeNext, nodePrev, value) {
    this.value = value;
    this.next = nodeNext;
    this.prev = nodePrev;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  unshift(value) {
    const linkedListNode = new LinkedListNode(null, null, value);

    if (this.head === null) {
      this.head = linkedListNode;
      return;
    }

    linkedListNode.next = this.head;
    this.head.prev = linkedListNode;
    this.head = linkedListNode;
  }

  push(value) {
    const linkedListNode = new LinkedListNode(null, null, value);

    if (this.head === null) {
      this.head = linkedListNode;
      return;
    }

    let tmpList = this.head;
    while (tmpList.next !== null) {
      tmpList = tmpList.next;
    }

    tmpList.next = linkedListNode;
    linkedListNode.prev = tmpList;
  }

  getLinkedListHead() {
    return this.head;
  }

  minDelta() {
    if (this.head === null || this.head.next === null) {
      return null;
    }
    let tmpList = this.head;
    let minDelta = tmpList.next.value - tmpList.value;
    let firstValue = tmpList.value;
    let secondValue = tmpList.next.value;
    while (tmpList.next !== null) {
      const delta = tmpList.next.value - tmpList.value;

      if (delta < minDelta) {
        minDelta = delta;
        firstValue = tmpList.value;
        secondValue = tmpList.next.value;
      }

      tmpList = tmpList.next;
    }

    if (minDelta === 0) {
      return null;
    }

    return `${firstValue} ${secondValue}`;
  }
}

const linkedList = new LinkedList();
linkedList.push(1);
linkedList.push(100);
linkedList.push(1000);
linkedList.push(10000);

console.log(linkedList.minDelta());
