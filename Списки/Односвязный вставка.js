class LinkedListNode {
  constructor(node, value) {
    this.value = value;
    this.next = node;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  unshift(value) {
    const linkedListNode = new LinkedListNode(this.head, value);

    this.head = linkedListNode;

    if (!this.tail) {
      this.tail = linkedListNode;
    }
  }

  push(value) {
    /**
     * Создаём узел со значением, но пустым полем next
     */
    const linkedListNode = new LinkedListNode(null, value);

    /**
     * Идёт проверка, если у нас нет головы или конца, то записываем
     */
    if (!this.head || !this.tail) {
      this.head = linkedListNode;
      this.tail = linkedListNode;
    } else {
      /**
       * В противном случае сначала указываем значение в поле next - это для head
       * Потом перезаписываем tail
       */
      this.tail.next = linkedListNode;
      this.tail = linkedListNode;
    }
  }

  getLinkedListHead() {
    return this.head;
  }
  getLinkedListTail() {
    return this.tail;
  }

  reverse() {
    let prev = null;
    let tmpList = this.head;
    if (tmpList === null) return;

    while (tmpList !== null) {
      const next = tmpList.next;

      tmpList.next = prev;

      if (tmpList.next === null) {
        this.tail = tmpList;
      }

      prev = tmpList;

      tmpList = next;
    }

    this.head = prev;
  }
}

const linkedList = new LinkedList();
// linkedList.unshift(5);
// linkedList.unshift(4);
// linkedList.unshift(3);
// linkedList.unshift(2);
// linkedList.unshift(1);
linkedList.push(1);
linkedList.push(2);
linkedList.push(3);
linkedList.push(4);
linkedList.push(5);
linkedList.reverse(5);

console.log(linkedList.getLinkedListHead());
console.log(linkedList.getLinkedListTail());
