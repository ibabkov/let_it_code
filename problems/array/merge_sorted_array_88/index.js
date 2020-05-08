/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export const merge = function(nums1, p1, nums2, p2) {
  if (p1 === '0') return nums2;
  if (p2 === '0') return nums1;

  p1 = p1 - 1;
  p2 = p2 - 1;

  while (p1 >= 0 || p2 >= 0) {
    if (p1 < 0 || nums2[p2] >= nums1[p1]) {
      nums1[p1 + p2 + 1] = nums2[p2--];
    } else {
      nums1[p1 + p2 + 1] = nums1[p1--];
    }
  }

  return nums1;
};