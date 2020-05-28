/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const invertNode = (node) => {
  if (!node) return null;

  const left = node.left;
  node.left = invertNode(node.right);
  node.right = invertNode(left);

  return node;
};

/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
export const invertTree = (root) => {
  invertNode(root);

  return root;
};