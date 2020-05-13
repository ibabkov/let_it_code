/**
 * @param {number[]} nums
 * @return {number}
 */
export var missingNumber = (nums) => {
  const map = new Map(nums.map((n) => [n, n]));

  for (let i = 0; i < nums.length + 1; i++) {
    if (!map.has(i)) return i;
  }

  return -1;
};