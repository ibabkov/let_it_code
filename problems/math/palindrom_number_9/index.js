/**
 * @param {number} x
 * @return {boolean}
 */
export const isPalindrome = function(x) {
  const str = String(x);
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left++] !== str[right--]) return false;
  }

  return true;
};