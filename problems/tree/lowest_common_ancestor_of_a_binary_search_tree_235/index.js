/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */


/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
export const lowestCommonAncestor = (root, p, q) => {
  // if both values more than root
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q)
    // if both values less than root
  } else if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q)
  }

  // if it is split point (LCA) return root;
  return root;
};