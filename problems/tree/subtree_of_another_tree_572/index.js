/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} s
 * @param {TreeNode} t
 * @return {boolean}
 */

export const compare = function(root1, root2) {
  if (!root1 && !root2) return true;
  if ((!root1 && root2) || (root1 && !root2)) return false;

  return root1.val === root2.val && compare(root1.left, root2.left) && compare(root1.right, root2.right)
};

export const isSubtree = function(s, t) {
  let result = false;

  const dfs = (node) => {
    if (!node || result) return;
    if (node.val === t.val) result = compare(node, t);

    dfs(node.left);
    dfs(node.right);
  };
  dfs(s);
  return result;
};

