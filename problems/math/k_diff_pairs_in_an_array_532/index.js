/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
export const findPairs = (nums, k) => {
  if (k < 0) return 0;
  let pairsCount = 0;
  let counter = new Map();

  for (let num of nums) {
    counter.set(num, (counter.get(num) || 0) + 1);
  }

  counter.forEach((count, num) => {
    if (k ? counter.has(Number(num) + k) : count > 1) pairsCount++;
  });

  return pairsCount;
};