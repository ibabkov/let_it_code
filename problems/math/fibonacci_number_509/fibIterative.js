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

  let a = 1;
  let b = 1;
  let i = 3;

  while (i <= n) {
    b = a + b;
    a = b - a;
    i++;
  }

  return b;
}