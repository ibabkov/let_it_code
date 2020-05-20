/**
 * @param {number} n
 * @return {number}
 */
export const climbStairs = (n) => {
  const memo = new Map();
  const pivot = (i = 0) => {
    if (i > n) return 0;
    if (i === n) return 1;
    if (memo.has(i)) return memo.get(i);

    const sum = pivot(i + 1) + pivot(i + 2);

    memo.set(i, sum);

    return sum;
  };
  return pivot();
};