const isPalindrome = (str, left = 0, right = str.length - 1) => {
  if (str.length <= 1) return true;

  while (left < right) {
    if (str[left++] != str[right--]) return false;
  }

  return true;
};
/**
 * @param {string} str
 * @return {boolean}
 */
export const validPalindrome = function(str) {
  if (isPalindrome(str)) return true;
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] != str[right]) {
      return isPalindrome(str, left, right - 1) || isPalindrome(str, left + 1, right);
    }
    right--; left++;
  }
};
