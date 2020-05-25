/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const containsDuplicate = function(nums) {
  if (nums.length < 2) {
    return false;
  }

  const charPresence = new Map();

  for (let i in nums) {
    const char = nums[i];
    if (charPresence.has(char)) {
      return true;
    }
    charPresence.set(char, true);
  }

  return false;
};