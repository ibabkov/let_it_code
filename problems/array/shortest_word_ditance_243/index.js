/**
 * @param {string[]} words
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
export const shortestDistance = function(words, word1, word2) {
    let p1 = Infinity;

    return words.reduce(
      (distance, word, p2) => {
        if (word === word1 || word === word2) {
          if (isFinite(p1) && word !== words[p1]) {
            distance = Math.min(distance, p2 - p1);
          }

          p1 = p2;
        }

        return distance;
      },
      Infinity
    )
  };