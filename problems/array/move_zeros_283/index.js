/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const moveZeroes = function(nums) {
  let zerosCount = 0;
  let i = 0;

  while (i < nums.length - zerosCount){
    if (nums[i]) {
      i++; continue;
    }
    zerosCount++;
    nums.splice(i, 1);
    nums.push(0);
  }
};