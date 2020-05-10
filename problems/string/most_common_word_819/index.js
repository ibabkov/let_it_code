/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
export const mostCommonWord = function(paragraph, banned) {
  const words = paragraph.toLowerCase().split(/\W+/m);
  const bannedSet = new Set(banned);
  let counter = new Map();

  return words.reduce(
    (mostCommonWord, word) => {
      if (bannedSet.has(word) || !word) return mostCommonWord;

      const count = (counter.get(word) || 0) + 1;
      counter.set(word, count);

      if (!mostCommonWord || count > counter.get(mostCommonWord)) {
        return word;
      }

      return mostCommonWord;
    },
    '')
};