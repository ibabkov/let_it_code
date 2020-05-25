/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const getNodeSet = function(head) {
  let set = new Set([head]);
  let node = head;

  while (node.next) {
    node = node.next;
    set.add(node);
  }

  return set;
};
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
export const getIntersectionNode = function(headA, headB) {
  if (!headA || !headB) return null;
  let set = getNodeSet(headA);
  let node = headB;

  while (node && !set.has(node)) {
    node = node.next;
  }

  return node;
};