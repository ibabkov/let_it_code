/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export const reverseList = function(head) {  // [1, 2, 3]
  if (!head) return head;
  // let prev to be head  1 | 2
  let prev = head;
  // let current to be prev.next  2 | 3
  let current = head.next;
  // set prev.next to null  1 | null
  prev.next = null;

  // loop while current exists 2 | 3 - 3 | null
  while(Boolean(current)) {
    // let next to be current.next; 3 | null - null
    let next = current.next;
    // set current.next to prev 2 | 1 - 3 | 2
    current.next = prev;
    // set prev to current 2 | 1 - 3 | 2
    prev = current;
    // set current to next 3 | null - null
    current = next;
  }

  // return prev; 3 | 2 -> 2 | 1 -> 1 | null
  return prev;
};
