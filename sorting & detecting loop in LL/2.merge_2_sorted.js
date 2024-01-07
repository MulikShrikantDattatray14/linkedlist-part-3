// no extra space and only the re-arrangement is allowed

class ListNode {
  constructor(val, next = null) {
    this.val = val;
    this.next = next;
  }
}

function mergeSortedLists(h1, h2) {
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

// Example usage
const list1 = new ListNode(1, new ListNode(3, new ListNode(5)));
const list2 = new ListNode(2, new ListNode(4, new ListNode(6)));

const mergedList = mergeSortedLists(list1, list2);

// Print the merged list
let result = "";
let current = mergedList;
while (current !== null) {
  result += current.val + " -> ";
  current = current.next;
}
result += "null";

console.log(result);
