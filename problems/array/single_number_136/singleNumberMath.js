/**
 * @param {number[]} nums
 * @return {number}
 */
export var singleNumber = (nums) => nums.reduce(
  (total, num) => total ^= num,
  0,
);