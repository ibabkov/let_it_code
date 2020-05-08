/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
export const intersection = function(nums1, nums2) {
  const set = new Set(nums1);

  return nums2.reduce((acc, n) => {
    if (set.has(n)) {
      set.delete(n);
      acc.push(n);
    }

    return acc;
  }, []);
};