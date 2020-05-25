/**
 * @param {number[]} A
 * @return {number[]}
 */
export const sortedSquares = function(A) {
  let result = [];

  (function pivot(l, r) {
    if (l > r) return;

    const left = Math.abs(A[l]);
    const right = Math.abs(A[r]);

    if (left > right) {
      result.unshift(left ** 2);
      pivot(l + 1, r);
    } else {
      result.unshift(right ** 2);
      pivot(l, r - 1);
    }

  })(0, A.length - 1);

  return result;
};