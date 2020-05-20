/**
 * @param {number} n
 * @return {string[]}
 */
export const fizzBuzz = (n) =>
  Array.from({ length: n}, (val, key) => {
    if ((key + 1) % 3 === 0 && (key + 1) % 5 === 0) return 'FizzBuzz';
    if ((key + 1) % 3 === 0) return 'Fizz';
    if ((key + 1) % 5 === 0) return 'Buzz';

    return String(key + 1);
  })
;