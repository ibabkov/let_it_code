/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export const addTwoNumbers = function(l1, l2, radix = 0) {
  if (!l1 && !l2) return radix ? new ListNode(radix) : null;
  if(!l2 && !radix) return l1;
  if(!l1 && !radix) return l2;

  const val1 = l1 ? l1.val : 0;
  const val2 = l2 ? l2.val : 0;
  const sum = val1 + val2 + radix;
  const newRadix = sum >= 10 ? 1 : 0;

  return new ListNode(sum % 10, addTwoNumbers(l1 && l1.next, l2 && l2.next, newRadix));
};