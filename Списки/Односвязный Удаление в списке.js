class LinkedListNode {
  constructor(nodeNext, value) {
    this.value = value;
    this.next = nodeNext;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(value) {
    const linkedListNode = new LinkedListNode(null, value);

    if (this.head === null) {
      this.head = linkedListNode;
      return;
    }

    let tmpList = this.head;
    while (tmpList.next !== null) {
      tmpList = tmpList.next;
    }

    tmpList.next = linkedListNode;
  }

  removeAll(value) {
    let dummy = new LinkedListNode(null, null);
    dummy.next = this.head;
    let prev = dummy;
    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        prev.next = current.next;
      } else {
        prev = current;
      }
      current = current.next;
    }

    this.head = dummy.next;
  }

  checkEvenNumber() {
    let evenNumber = -1;

    let current = this.head;
    while (current !== null) {
      if (current.value % 2 === 0) {
        evenNumber = current.value;
      }
      current = current.next;
    }

    return evenNumber;
  }

  getLinkedListHead() {
    return this.head;
  }
}

const linkedList = new LinkedList();
linkedList.push(7);
linkedList.push(3);
linkedList.push(4);
linkedList.push(1);
linkedList.push(10);
linkedList.push(11);
linkedList.push(12);
linkedList.push(19);
linkedList.push(21);

// linkedList.removeAll(10000);
// console.log(linkedList.getLinkedListHead());

console.log(linkedList.checkEvenNumber());
