/**
 * @param {string} s
 * @return {number}
 */
export const romanToInt = function(s) {
  let dict = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000],
  ]);

  return Array.prototype.reduce.call(
    s,
    (sum, num, i) => {
      let current = dict.get(num);
      let next = dict.get(s[i + 1]);

      if (current < next) {
        return sum -= current;
      } else {
        return sum += current;
      }
    },
    0,
  );
};