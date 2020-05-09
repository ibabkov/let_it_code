/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
export const isAlienSorted = function(words, order) {
  const alphabet = [].reduce.call(
    order,
    (map, char, i) => map.set(char, i),
    new Map(),
  );

  for(let i = 0; i + 1 < words.length; i++) {
    const a = words[i];
    const b = words[i+1];

    for(let j = 0; j < a.length || j < b.length; j++) {
      const c = alphabet.get(a[j]);
      const d = alphabet.get(b[j]);
      if (!isFinite(d) || c > d) {
        return false;
        break;
      } else if (!isFinite(c) || c < d) {
        break;
      }
    }
  }

  return true;
};