/**
 * @param {string} s
 * @return {number}
 */

const getCharsInfo = function(str) {
  let indexer = new Map();

  for (let i = 0; i < str.length; i++) {
    indexer.set(
      str[i],
      indexer.get(str[i]) === undefined ? i : -1
    );
  }

  return indexer.values();
};

export const firstUniqChar = function(str) {
  if (!str) return -1;

  for (let index of getCharsInfo(str)) {
    if(index != -1) return index;
  }

  return -1;
};