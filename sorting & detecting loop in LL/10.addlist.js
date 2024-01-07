// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// Function to add two linked lists representing numbers
function addTwoNumbers(A, B) {
  let dummyHead = new ListNode(0);
  let temp = dummyHead;
  let carry = 0;

  while (A != null || B != null || carry == 1) {
    let sum = (A != null ? A.val : 0) + (B != null ? B.val : 0) + carry;
    carry = Math.floor(sum / 10); // recall bitmanipulation

    temp.next = new ListNode(sum % 10);
    temp = temp.next;

    if (A != null) A = A.next;
    if (B != null) B = B.next;
  }
  //console.log(dummyHead.next);
  return dummyHead.next;
}

// Function to convert an array to a linked list
function arrayToLinkedList(arr) {
  let head = new ListNode(arr[0]);
  let current = head;

  for (let i = 1; i < arr.length; i++) {
    current.next = new ListNode(arr[i]);
    current = current.next;
  }

  return head;
}

// Function to convert a linked list to an array
function linkedListToArray(head) {
  let result = [];
  while (head) {
    result.push(head.val);
    head = head.next;
  }
  return result;
}

// Example usage
// let A1 = [2, 4, 3];
// let B1 = [5, 6, 4];
let A1 = [9,9,1];
let B1 = [1];

// let A2 = [9, 9];
// let B2 = [1];

let linkedListA1 = arrayToLinkedList(A1);
let linkedListB1 = arrayToLinkedList(B1);

// let linkedListA2 = arrayToLinkedList(A2);
// let linkedListB2 = arrayToLinkedList(B2);

let result1 = addTwoNumbers(linkedListA1, linkedListB1);
//let result2 = addTwoNumbers(linkedListA2, linkedListB2);

console.log(linkedListToArray(result1)); // Output: [7, 0, 8]
//console.log(linkedListToArray(result2)); // Output: [0, 0, 1]
