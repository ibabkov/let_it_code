/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function(nums, target) {
  const length = nums.length;

  if (!length) return -1;

  function innerFn(left, right) {
    const isFinalElem = left === right;
    const middleIndex = Math.floor((right + left) / 2);
    const middleElem = nums[middleIndex];

    if (middleElem === target) return middleIndex;

    if (!isFinalElem) {
      if (target > middleElem) {
        return innerFn(middleIndex + 1, right);
      } else {
        return innerFn(left, !middleIndex ? 0 : middleIndex - 1);
      }
    }
    return -1;
  }

  return innerFn(0, length - 1);
};

export { search };
