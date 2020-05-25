/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */


/**
 * @param {TreeNode} root
 * @return {number}
 */
export const diameterOfBinaryTree = function(root) {
  if (!root) return null;

  let count = 1;
  const maxDepth = function(node) {
    if (!node) return 0;
    const left = maxDepth(node.left);
    const right = maxDepth(node.right);
    count = Math.max(count, left + right + 1);
    return 1 + Math.max(left, right)
  };

  maxDepth(root);
  return count -1;
};