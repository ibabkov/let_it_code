/**
 * @param {number[]} n
 * @return {number}
 */
export var maximumProduct = function(n) {
  const nums = n.length === 3 ? n : n.sort((a, b) => a - b);

  return Math.max(
    nums[0] * nums[1] * nums[nums.length - 1],
    nums[nums.length - 3] * nums[nums.length - 2] * nums[nums.length - 1],
  );
};