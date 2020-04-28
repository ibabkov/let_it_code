/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
export const isSubsequence = function(str1, str2) {
  if (!str2.length && !str1.length) return true;
  if (str2.length < str1.length) return false;

  let i = 0;

  for (let char of str2) {
    if (char === str1[i]) i++;
    if (i === str1.length) return true;
  }

  return false;
};