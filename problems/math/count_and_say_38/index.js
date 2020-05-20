/**
 * @param {number} n
 * @return {string}
 */
export const countAndSay = function(n) {
  if (n === 1) return '1';

  return countAndSay(n-1)
    .match(/1+|2+|3+/g)
    .reduce((acc, nums) => acc += `${nums.length}${nums[0]}`, '')
};