class StackNode {
  constructor(node, value) {
    this.value = value;
    this.next = node;
  }
}

class Stack {
  constructor() {
    this.top = null;
  }

  /**
   * Мы записываем в самый верх стека. Если сравнивать с односвязным списком - вставка в начало (перед head (top))
   */
  push(value) {
    const stackNode = new StackNode(null, value);

    if (this.top === null) {
      this.top = stackNode;
      return;
    }

    stackNode.next = this.top;
    this.top = stackNode;
  }

  pop() {
    if (this.top === null) {
      return null;
    }

    this.top = this.top.next;

    return this.top;
  }

  getStack() {
    return this.top;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);

console.log(stack.getStack());

console.log(stack.pop());
console.log(stack.pop());

console.log(stack.getStack());
