/**
 * @param {string} str
 * @return {boolean}
 */
export const isPalindrome = function(str) {
  if (typeof str !== 'string') return false;

  const validString = str
    .toLowerCase()
    .replace(/[^\w\d]/gim, '');

  function innerFn(s) {
    if (s.length <= 1) return true;
    if (s[0] !== s[s.length-1]) return false;

    return innerFn(s.slice(1, s.length - 1));
  }

  return innerFn(validString);
};