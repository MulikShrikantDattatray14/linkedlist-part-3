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
    let cycleDetected = false;
    if (hare === null || hare.next === null) {
      return head;
    }

    // Detect cycle
    while (hare !== null && hare.next !== null) {
      tortoise = tortoise.next;
      hare = hare.next.next;

      if (tortoise === hare) {
        cycleDetected = true;
        break;
      }
    }
    let before;
    // Break the cycle
    if (cycleDetected) {
      tortoise = this.head;
      while (tortoise !== hare) {
        before = hare; // save the previous value .i.e a step before it becomes equal
        tortoise = tortoise.next;
        hare = hare.next;
      }

      // Set the next of the node where the cycle begins to null
      if (before != null) {
        before.next = null;
      } else {
        // If the cycle starts at the head, update the head
        head = null;
      }
    }
    //console.log(this.head); //(if they ask head , return head)
    return cycleDetected;
  }
  removehasCycle() {
    let tortoise = this.head;
    let hare = this.head;
    let cycleDetected = false;

    // Detect cycle
    while (hare !== null && hare.next !== null) {
      tortoise = tortoise.next;
      hare = hare.next.next;

      if (tortoise === hare) {
        cycleDetected = true;
        break;
      }
    }
    //console.log(this.head);
    return cycleDetected;
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.append(1);
linkedList.append(2);
linkedList.append(3);
linkedList.append(4);
linkedList.append(5);
console.log("Before removing loop");
// Creating a cycle for testing
linkedList.head.next.next.next.next.next = linkedList.head.next;
const cycleDetected = linkedList.hasCycle();
console.log("cycle is present :" + cycleDetected); // Output: true
console.log("================================================================");
console.log("After removing the loop");

const removecycle = linkedList.removehasCycle();
console.log("cycle is present : " + removecycle); // Output: true
