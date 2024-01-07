// Definition for singly-linked list.
//    function Node(data){
//      this.data = data
//      this.next = null
//    }

module.exports = {
    //param A : head node of linked list
    //param B : head node of linked list
    //return the head node in the linked list
    addTwoNumbers: function (A, B) {
        let dummyHead = new Node(0);
        let temp = dummyHead;
        let carry = 0;

        while (A != null || B != null || carry == 1) {
            let sum = (A != null ? A.data : 0) + (B != null ? B.data : 0) + carry;
            carry = Math.floor(sum / 10); // recall bitmanipulation

            temp.next = new Node(sum % 10);
            temp = temp.next;

            if (A != null) A = A.next;
            if (B != null) B = B.next;
        }
        //console.log(dummyHead.next);
        return dummyHead.next;
    }
};
