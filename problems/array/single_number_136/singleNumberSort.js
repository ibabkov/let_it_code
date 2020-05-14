/**
 * @param {number[]} nums
 * @return {number}
 */
export var singleNumber = function(nums) {
  return nums
    .sort((a, b) => a - b)
    .find((num, i, arr) => {
      return arr[i - 1] != num && arr[i + 1] != num;
    });
};