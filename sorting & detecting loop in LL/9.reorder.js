// Problem Description
// Given a singly linked list A

//  A: A0 → A1 → … → An-1 → An 
// reorder it to:

//  A0 → An → A1 → An-1 → A2 → An-2 → … 
// You must do this in-place without altering the nodes' values.

// Definition for singly-linked list.
function Node(data) {
    this.data = data;
    this.next = null;
}

function reverseList(A) {
    let h2 = null;
    let h1 = A;
    let t;
    while (h1 != null) {
        t = h1;
        h1 = h1.next;
        t.next = h2;
        h2 = t;
    }
    return h2;
}

function reorderList(A) {
    let h1 = A;
    if (h1 == null || h1.next == null) {
        return h1;
    }
    // Step 1 ---> get the mid of the given linkedlist
    let slow = h1;
    let fast = h1;
    while (fast.next != null && fast.next.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    let mid = slow; // 1st mid
    // Step 2 ---> delink and get the sublists.
    // sublist 1 from h1 to mid
    // sublist 2 from the node after mid i.e mid.next till the last node.
    let h2 = mid.next;
    mid.next = null; // separating
    // Step 3 ---> reverse the sublist 2
    let head1 = A;
    let head2 = reverseList(h2);
    // Step 4 ---> rearrange
    let h = head1;
    let t = head1; // t will keep moving from head1 to head2 and vice versa
    while (head1 != null) {// zigzag movement
        if (t == head1) { // starting
            head1 = head1.next;
            t.next = head2;
            t = t.next;
        } else {
            head2 = head2.next;
            t.next = head1;
            t = t.next;
        }
    }
    return h;
}

// Function to print a linked list
function printList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.data + " -> ");
        current = current.next;
    }
    console.log("null");
}

// Running Example
// Create a sample linked list: 1 -> 2 -> 3 -> 4 -> 5
let linkedList = new Node(1);
linkedList.next = new Node(2);
linkedList.next.next = new Node(3);
linkedList.next.next.next = new Node(4);
linkedList.next.next.next.next = new Node(5);

console.log("Original Linked List:");
printList(linkedList);

// Reorder the linked list
let reorderedList = reorderList(linkedList);

console.log("\nReordered Linked List:");
printList(reorderedList);
