class ListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

function findMiddleNode(head) {
  if (head == null) return head;
  let tortoise = head;
  let hare = head;
  ///////////////////////////////////////////////////////
  // below while loop gives the 2nd middle element
  // while (hare !== null && hare.next !== null) {
  //   tortoise = tortoise.next;
  //   hare = hare.next.next;
  // }

  ///////////////////////////////////////////////////
  // below while loop gives the 1nd middle element
  while (hare.next !== null && hare.next.next !== null) {
    tortoise = tortoise.next;
    hare = hare.next.next;
  }

  return tortoise;
}

// Example usage:

// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
const linkedList = new ListNode(
  1,
  new ListNode(
    2,
    new ListNode(
      3,
      new ListNode(
        4,
        new ListNode(
          5,
          new ListNode(
            6,
            new ListNode(7, new ListNode(8, new ListNode(9, new ListNode(10))))
          )
        )
      )
    )
  )
);

// Find the middle node
const middleNode = findMiddleNode(linkedList);

console.log("Middle node value:", middleNode.value);
