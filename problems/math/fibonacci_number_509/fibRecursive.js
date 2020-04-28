function memoize(fn) {
  let cache = {};

  return function (x) {
    if (x in cache) return cache[x];

    return (cache[x] = fn.call(this, x))
  };
}



function fibRecursive(n) {
  if (isNaN(Number(n)) || n < 0) return null;
  if (n === 0) return 0;
  if (n <= 2) return 1;

  return fib(n - 2) + fib(n - 1);
}

/**
 * @link https://leetcode.com/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 * @description
 * The Fibonacci numbers, commonly denoted F(n) form a sequence,
 * called the Fibonacci sequence, such that each number is the sum of
 * the two preceding ones, starting from 0 and 1.
 */
export const fib = memoize(fibRecursive);