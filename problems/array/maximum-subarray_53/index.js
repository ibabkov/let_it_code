/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = function(nums) {
  if (!nums.length) return nums.length;
  if (nums.length === 1) return nums[0];

  // let maxSum to be first number
  let maxSum = nums[0];
  let sum = maxSum;
  let right = 1;

  // loop while right less than nums.length
  while (right < nums.length) {
    sum = Math.max(nums[right], sum + nums[right]);
    maxSum = Math.max(maxSum, sum);
    right++
  }

  return maxSum;
};