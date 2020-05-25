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
 * @return {boolean}
 */
export const isSymmetric = function(root) {
    let queue = [root, root];

    while (queue.length) {
        const node1 = queue.shift();
        const node2 = queue.shift();

        if (!node1 && !node2) continue;
        if ((!node1 || !node2) || node1.val !== node2.val) return false;

        queue = queue.concat([node1.left, node2.right, node1.right, node2.left]);
    }

    return true;
};