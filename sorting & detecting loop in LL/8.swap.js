//Problem Description
// Given a linked list A, swap every two adjacent nodes and return its head.

// NOTE: Your algorithm should use only constant space. You may not modify the values in the list; only nodes themselves can be changed.
//same code as - reverse every k nodes , but always keep k=2;
function Node(data) {
    this.data = data;
    this.next = null;
}

function reversefirstknodes( head , k){
    if (k == 1) return head;
    if (head == null || k == 0) return head;
    let h2 = null;
    let h1 = head;
    let h3 = head;
    let tk = k;
    let t = head;
    while (k > 0 && h1 != null) {
        t = h1;
        h1 = h1.next;
        t.next = h2;
        h2 = t;
        k--

    }
    h3.next = reversefirstknodes(h1, tk)
    return h2;
}

// Example usage:
// Create a linked list: 1 -> 2 -> 3 -> 4 -> 5
const head = new Node(1);
head.next = new Node(2);
head.next.next = new Node(3);
head.next.next.next = new Node(4);
head.next.next.next.next = new Node(5);
head.next.next.next.next.next = new Node(6);
head.next.next.next.next.next.next = new Node(7);
head.next.next.next.next.next.next.next = new Node(8);
head.next.next.next.next.next.next.next.next = new Node(9);
head.next.next.next.next.next.next.next.next.next = new Node(10);

// Log the original linked list
console.log("Original List:");
let current = head;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}

// Reverse the linked list using the encapsulated method
let tk=2;
const reversedHead =reversefirstknodes( head , tk);

// Log the reversed linked list
console.log("\nReversed List:");
current = reversedHead;
while (current !== null) {
    console.log(current.data);
    current = current.next;
}
