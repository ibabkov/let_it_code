/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const isAncestor = (root, node, map) => {
  if(map.has(root)) return map.get(root);
  if(!root) return false;
  if(root === node) {
    map.set(root, true)
    return true;
  }

  return isAncestor(root.right, node, map) || isAncestor(root.left, node, map);
};

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
export const lowestCommonAncestor = (root, p, q) => {
  let ancestor = null;
  let maps = [new Map(), new Map()];
  const dfs = (node) => {
    if(!node) return;
    if(isAncestor(node, p, maps[0]) && isAncestor(node, q, maps[1])) {
      ancestor = node;
    }

    dfs(node.right);
    dfs(node.left);
  };

  dfs(root);

  return ancestor;
};