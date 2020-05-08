/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export const intersect = function(nums1, nums2) {
  if (!nums1.length || !nums2.length) return [];

  let map = new Map();
  nums1.forEach((n) => {
    map.set(n, (map.get(n) || 0) + 1) ;
  });

  return nums2.filter((num) => {
    const counter = map.get(num);

    if (!counter) return false;

    map.set(num, counter - 1);
    return true;
  });
};