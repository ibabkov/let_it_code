/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
export const sortedArrayToBST = (nums, left = 0, right = nums.length - 1) => {
  if (left > right) return null;

  const middle = Math.floor((left + right) / 2);

  return new TreeNode(
    nums[middle],
    sortedArrayToBST(nums, left, middle - 1),
    sortedArrayToBST(nums, middle + 1, right),
  );
};
