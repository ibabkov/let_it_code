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
const mergeTwoLists = function(l1, l2) {
  // let first be new ListNode
  let first = new ListNode();
  // let prev be first
  let prev = first;
  // loop while l1 or l2 exist
  while (l1 && l2) {
    // let node to be node with min value
    prev = prev.next = l1.val <= l2.val ? l1 : l2;

    if (l1 === prev) l1 = l1.next;
    else l2 = l2.next;
  }

  prev.next = l1 || l2;

  return first.next;
};

/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
export const mergeKLists = function(lists) {
  if (!lists.length) return null;
  if (lists.length <= 1) return lists[0];
  const first = lists.shift();

  return lists.reduce((acc, list) => mergeTwoLists(acc, list), first);
};