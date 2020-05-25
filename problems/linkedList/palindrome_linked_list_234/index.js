/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const getTail = (head) => {
  let tail = head;

  while (tail.next) {
    const prev = tail;
    tail = tail.next;
    tail.prev = prev;
  }

  return tail;
};

/**
 * @param {ListNode} head
 * @return {boolean}
 */
export const isPalindrome = (head) => {
  if (!head) return true;

  let tail = getTail(head);

  while (tail !== head && tail.next !== head) {
    if (tail.val !== head.val) return false;

    head = head.next;
    tail = tail.prev;
  }

  return true;
};
