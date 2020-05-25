/**
 * @param {number[]} A
 * @return {number}
 */
export const peakIndexInMountainArray = function(A) {
  let current = 0;
  let next = 1;

  while (A[next] > A[current]) {
    next++; current++;
  }

  return current;
};