//Given a linked list, check if the linked list has a loop (cycle) or not. The below diagram shows a linked list with a loop. 
//logic : if slow==fast , there is a cycle . if fast=null or fast.next=null , there is no cycle .
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  append(data) {
    const newNode = new Node(data);
    if (this.head == null) {
      this.head = newNode;
      return;
    }
    let current = this.head;
    while (current.next) {
      current = current.next;
    }

    current.next = newNode;
  }

  hasCycle() {
    let tortoise = this.head;
    let hare = this.head;

    while (hare !== null && hare.next !== null) {
      tortoise = tortoise.next;
      hare = hare.next.next;

      if (tortoise === hare) {
        return true; // Cycle detected
      }
    }

    return false; // No cycle found
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);

// Creating a cycle for testing
linkedList.head.next.next.next.next.next = linkedList.head.next;

console.log(linkedList.hasCycle()); // Output: true
