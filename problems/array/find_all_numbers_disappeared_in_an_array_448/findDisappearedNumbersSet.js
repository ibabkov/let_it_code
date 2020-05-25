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
export const findDisappearedNumbers = function(nums) {
    let set = new Set(nums);
    let result = [];

    for (let num = 1; num <= nums.length; num++){
        if (!set.has(num)) {
            result.push(num);
        }
    }

    return result;
};