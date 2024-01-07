// Definition for singly-linked list.
function Node(data) {
    this.data = data;
    this.next = null;
}

function loop(A) {
    let head = A;
    let tortoise = head;
    let hare = head;
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

    // Break the cycle
    if (cycleDetected) {
        tortoise = head;
        let before = null;

        while (tortoise !== hare) {
            before = hare; // Save the previous value, i.e., a step before it becomes equal
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

    return head;
}

// Example usage:
const example1 = new Node(1);
example1.next = new Node(2);
example1.next.next = example1; // Creating a loop
const result1 = loop(example1);
console.log("Example 1:");
printLinkedList(result1);

const example2 = new Node(3);
example2.next = new Node(2);
example2.next.next = new Node(4);
example2.next.next.next = new Node(5);
example2.next.next.next.next = new Node(6);
example2.next.next.next.next.next = example2.next.next; // Creating a loop
const result2 = loop(example2);
console.log("\nExample 2:");
printLinkedList(result2);

// Function to print the linked list
function printLinkedList(head) {
    let current = head;
    while (current !== null) {
        process.stdout.write(current.data + " -> ");
        current = current.next;
    }
    console.log("NULL");
}
