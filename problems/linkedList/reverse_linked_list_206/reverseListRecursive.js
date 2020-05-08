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
export const reverseList = function(current, prev = null) {
  if (!current) return prev;

  let next  = current.next;
  current.next = prev;

  return reverseList(next, current)
};
