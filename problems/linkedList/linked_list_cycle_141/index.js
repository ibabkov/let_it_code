/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const hasCycle = function(head) {
  if (!head || ! head.next) return false;
  let slow = head;
  let fast = head.next;

  while (slow && fast && fast.next) {
    if (slow === fast) return true;
    slow = slow.next;
    fast = fast.next.next;
  }

  return false;
};