/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
export const searchBST = function(root, val) {
  if (!root) return null;
  if (root.val === val) return root;

  return findParent(root, val);
};

function findParent(node, value) {
  if(!node) return  null;

  if (value === node.val) {
    return  node;
  } else if (value > node.val) {
    return findParent(node.right, value);
  } else {
    return findParent(node.left, value);
  }
}