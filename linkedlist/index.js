// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let counter = 0;
    let node = this.head;

    while (node) {
      counter++;
      node = node.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;
    let node = this.head;

    while (node) {
      if (!node.next) return node;
      node = node.next;
    }
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) return null;
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) return null;
    if (!this.head.next) return (this.head = null);

    let previous = this.head;
    let node = this.head.next;
    while (node.next) {
      previous = node;
      node = node.next;
    }
    previous.next = null;
  }

  insertLast(data) {
    const lastNode = this.getLast();
    if (!this.head) return this.insertFirst(data);
    const newNode = new Node(data);
    lastNode.next = newNode;
  }

  getAt(index) {
    if (index < 0 || index >= this.size()) return null;
    let counter = 0;
    let node = this.head;
    while (counter !== index) {
      node = node.next;
      counter++;
    }
    return node;
  }

  removeAt(index) {
    if (index < 0 || index >= this.size()) return null;
    if (index === 0) return this.removeFirst();
    let before = this.getAt(index - 1);
    before.next = before.next.next;
    //expensive operation so reduced to chaining next
    // let after = this.getAt(index + 1);
  }

  
}

module.exports = { Node, LinkedList };
