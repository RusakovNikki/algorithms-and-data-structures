class TreeNode {
  constructor(value) {
    this.right = null;
    this.left = null;
    this.value = value;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
  }

  addTreeNode(value) {
    const newTreeNode = new TreeNode(value);

    if (!this.root) {
      this.root = newTreeNode;
      return;
    }

    let tmpNode = this.root;

    while (tmpNode) {
      if (value > tmpNode.value) {
        if (!tmpNode.right) {
          break;
        }

        tmpNode = tmpNode.right;
      } else {
        if (!tmpNode.left) {
          break;
        }

        tmpNode = tmpNode.left;
      }
    }

    if (value > tmpNode.value) {
      tmpNode.right = newTreeNode;
    } else {
      tmpNode.left = newTreeNode;
    }
  }

  print(root = this.root) {
    if (!root) return;

    console.log(root.value);
    this.print(root.left);
    this.print(root.right);
  }

  checkMinValue(root = this.root) {
    let tmpNode = root;

    if (!tmpNode) {
      return null;
    }

    while (tmpNode) {
      if (!tmpNode.left) {
        break;
      }
      tmpNode = tmpNode.left;
    }

    return tmpNode;
  }
  checkMaxValue() {
    let tmpNode = this.root;

    if (!tmpNode) {
      return null;
    }

    while (tmpNode) {
      if (!tmpNode.right) {
        break;
      }
      tmpNode = tmpNode.right;
    }

    console.log(tmpNode.value);
  }

  searchNode(targetValue, head = this.root) {
    let tmpNode = head;

    if (!tmpNode) return null;

    if (tmpNode.value === targetValue) return tmpNode;

    if (targetValue > tmpNode.value) {
      return this.searchNode(targetValue, tmpNode.right);
    } else {
      return this.searchNode(targetValue, tmpNode.left);
    }
  }

  deleteTreeNode(value, root = this.root, prevNode = null) {
    debugger;
    let curNode = root;

    while (curNode !== null) {
      if (curNode.value === value) {
        break;
      }

      prevNode = curNode;
      if (curNode.value > value) {
        curNode = curNode.left;
      } else if (curNode.value < value) {
        curNode = curNode.right;
      }
    }

    if (curNode === null) return null;

    /**
     * 1. Если элемент - лист
     */
    if (!curNode.left && !curNode.right) {
      if (prevNode.left?.value === curNode.value) {
        prevNode.left = null;
      } else {
        prevNode.right = null;
      }
    }

    /**
     * 2. Если элемент имеет только одного дочернего элемента
     */
    if ((curNode.left && !curNode.right) || (curNode.right && !curNode.left)) {
      const childNode = curNode.left || curNode.right;

      if (!prevNode) {
        return (this.root = childNode);
      }

      if (prevNode.left?.value === curNode.value) {
        prevNode.left = childNode;
      } else {
        prevNode.right = childNode;
      }
    }

    /**
     * 3. Если у элемента есть два дочерних элемента
     */
    if (curNode.left && curNode.right) {
      const minNode = this.checkMinValue(curNode.right);

      curNode.value = minNode.value;

      this.deleteTreeNode(minNode.value, curNode.right, curNode);
    }
  }
}

const binaryTree = new BinaryTree();
binaryTree.addTreeNode(5);
binaryTree.addTreeNode(4);
binaryTree.addTreeNode(2);
binaryTree.addTreeNode(3);
binaryTree.addTreeNode(1);
binaryTree.addTreeNode(8);
binaryTree.addTreeNode(7);

binaryTree.print();
console.log("-----------------------");

binaryTree.deleteTreeNode(5);
binaryTree.print();
