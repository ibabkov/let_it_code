/**
 * @param {string} str1
 * @param {string} str2
 * @return {boolean}
 */
export const isAnagram = function(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }
  let charCount1 ={};
  let charCount2 ={};

  for (let i in str1) {
    if ((/\W/).test(str1[i] + str2[i])){
      return false;
    }

    charCount1[str1[i]] = (charCount1[str1[i]] || 0) + 1;
    charCount2[str2[i]] = (charCount2[str2[i]] || 0) + 1;
  }

  for (let char in charCount1) {
    if (charCount1[char] !== charCount2[char]) {
      return false;
    }
  }

  return true;
};