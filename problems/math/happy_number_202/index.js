const getSum = function(n, memo) {
  return n.toString().split('').reduce((acc, d) => acc + memo.get(d), 0);
};
/**
 * @param {number} n
 * @return {boolean}
 */
export const isHappy = function(n) {
  let memo = new Set();
  let exponents = new Map(Array.from(Array(10), (v, key) => [ String(key), key ** 2 ]));

  const pivot = (num) => {
    if(memo.has(num)) return false;

    const sum = getSum(num, exponents);

    if (sum === 1) return true;

    memo.add(num);
    return pivot(sum);
  };
  return pivot(n);
};