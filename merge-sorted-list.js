/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

function ListNode(val, next) {
       this.val = (val===undefined ? 0 : val)
       this.next = (next===undefined ? null : next)
      }

var mergeTwoLists = function(list1, list2) {
    let sentinel = tail = new ListNode();

    while (list1 && list2) {/* Time O(N + M) */
        const isL2Greater = list1.val <= list2.val;
        const isL2Less = list2.val < list1.val;

        if (isL2Greater) {
            tail.next = list1;
            list1 = list1.next;
        }

        if (isL2Less) {
            tail.next = list2;
            list2 = list2.next;
        }

        tail = tail.next;
    }

    tail.next = list1 || list2;

    return sentinel.next;
};

// create linked lists using ListNode constructor
const list1 = new ListNode(1, new ListNode(2, new ListNode(3)));
const list2 = new ListNode(4, new ListNode(5, new ListNode(6)));

 
console.log(mergeTwoLists(list1,list2))


/*
another efficient way
  let curr = new ListNode();
  let dummy = curr;

  while(l1&&l2) {
      if(l1.val <l2.val) {
          curr.next = l1;
          l1 = l1.next;
      } else {
          curr.next = l2;
          l2 = l2.next;
      }
      curr = curr.next;
  }
  if(l1) {
      curr.next = l1;
  }
  if(l2) {
      curr.next = l2;
  }
  return dummy.next;
*/