/**
 * @param {number[]} nums
 * @return {number}
 */
export var majorityElement = function(nums) {
  let counter = new Map();

  for (let num of nums) {
    const count = (counter.get(num) || 0) + 1;

    counter.set(num, count);

    if (count > nums.length / 2) return num;
  }

  return null;
};