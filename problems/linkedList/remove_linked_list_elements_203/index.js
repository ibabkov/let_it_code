/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

const getHead = (node, val) => {
  let head = null;


  while (!head && node) {
    if (node.val !== val) {
      head = node;
      break;
    }
    node = node.next;
  }

  return head;
};
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
export const removeElements = (h, val) => {
  let head = getHead(h, val);

  if (!head) return null;

  let prev = head;
  let node = head.next;

  while (node) {
    if (node.val !== val) {
      prev = prev.next = node;

    }

    node = node.next;
    prev.next = null;
  }

  return head;
};