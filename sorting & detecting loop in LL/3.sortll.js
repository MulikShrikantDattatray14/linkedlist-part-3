//merge sort the linked list
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  printList() {
    let current = this.head;
    while (current) {
      console.log(current.val + " ");
      current = current.next;
    }
  }

  mergeSortList(head) {
    if (head == null || head.next == null) {
      return head;
    }

    let center1 = this.findMiddle(head);
    let center2 = center1.next;
    center1.next = null;
    //console.log("shri")

    let h1 = this.mergeSortList(head); // Fix this line by passing 'head'
    let h2 = this.mergeSortList(center2);

    const sortedList = this.merge(h1, h2);
    return sortedList;
  }
// we need 1st middle element
  findMiddle(head) {
    if (head === null) {
      return null;
    }

    let slow = head;
    let fast = head;

    while (fast.next !== null && fast.next.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
    }

    return slow;
  }

  merge(h1, h2) {
    if (h1 == null) return h2;
    if (h2 == null) return h1;
    let h3 = null; // head for the new merged LL
    let Temp = null;
    // for identifying the start node of the new LL
    if (h1.val < h2.val) {
      h3 = h1;
      Temp = h1;
      h1 = h1.next; // this maintains head of 1st LL
    } else {
      h3 = h2;
      Temp = h2;
      h2 = h2.next; //// this maintains head of 2st LL
    }
    // for remaining nodes
    while (h1 !== null && h2 !== null) {
      if (h1.val < h2.val) {
        Temp.next = h1;
        h1 = h1.next;
        Temp = Temp.next;
      } else {
        Temp.next = h2;
        h2 = h2.next;
        Temp = Temp.next;
      }
    }

    // If one of the lists is not fully processed
    if (h1 !== null) {
      Temp.next = h1;
    } else {
      Temp.next = h2;
    }
    return h3;
  }
}

// Example usage:
const linkedList = new LinkedList();
linkedList.push(30);
linkedList.push(10);
linkedList.push(50);
linkedList.push(20);
linkedList.push(40);

console.log("Original Linked List:");
linkedList.printList();

linkedList.head = linkedList.mergeSortList(linkedList.head);

console.log("\nSorted Linked List:");
linkedList.printList();
