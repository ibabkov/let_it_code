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
  // mark all indexes that exist in array by multiplying on -1
  nums.forEach((num) => {
    const i = Math.abs(num) - 1;
    if (nums[i] > 0) nums[i] *= -1;
  });

  let result = [];

  for (let num = 1; num <= nums.length; num++){
    if (nums[num - 1] > 0) {
      result.push(num);
    }
  }

  return result;
};