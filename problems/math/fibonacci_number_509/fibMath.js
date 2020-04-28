/**
 * @link https://leetcode.com/problems/fibonacci-number/
 * @param {number} n
 * @return {number}
 * @description
 * The Fibonacci numbers, commonly denoted F(n) form a sequence,
 * called the Fibonacci sequence, such that each number is the sum of
 * the two preceding ones, starting from 0 and 1.
 */
export function fib(n) {
  if (n === 0) return 0;
  if (n <= 2) return 1;

  const a = (1 + 5 ** 0.5) / 2;
  return Math.round(a ** n / 5 ** 0.5);
}