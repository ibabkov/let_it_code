/**
 * @param {string[]} strs
 * @return {string}
 */
export const longestCommonPrefix = function(s) {
  if (!s.length) return '';

  let strs = s.concat().sort();
  let prefix = strs[0];

  for (let i = 1; prefix && i < strs.length; i++) {
    const word = strs[i];
    let newPrefix = '';

    for (let j = 0; prefix[j] && word[j] && prefix[j] === word[j]; j++) {
      newPrefix+= word[j];
    }

    prefix = newPrefix
  }

  return prefix;
};