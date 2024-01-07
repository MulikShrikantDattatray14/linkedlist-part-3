// give start node of the cycle
//logic : keep s1 at head and s2 at interaction point where slow==fast. then move forward each s1 and s2 till both becomes equal i.e s1==s2.
// the point where s1==s2, that point is the starting point of the cycle
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

    // Detect cycle
    while (hare !== null && hare.next !== null) {
      tortoise = tortoise.next;
      hare = hare.next.next;

      if (tortoise === hare) {
        cycleDetected = true;
        break;
      }
    }
    let from_interaction_point = hare;
    // Find starting point of the cycle
    if (cycleDetected) {
      let from_start_point = this.head;
      while (from_start_point !== from_interaction_point) {
        from_start_point = from_start_point.next;
        from_interaction_point = from_interaction_point.next;
      }
      return from_start_point; // Return the starting node of the cycle
    }

    return null; // No cycle found
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

const startOfCycle = linkedList.hasCycle();
console.log(startOfCycle ? startOfCycle.data : null); // Output: 1 (the starting node of the cycle)

