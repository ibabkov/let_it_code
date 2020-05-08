/**
 * @param {number[][]} items
 * @return {number[][]}
 */
export const highFive = function(items) {
  const map = new Map();
  const result = [];

  for (let [id, score] of items) {
    const scores = map.get(id) || [];
    map.set(id, scores.concat([score]));
  }

  map.forEach((scores, id) => {
    result.push([
      id,
      Math.floor(
        scores
          .sort((a, b) => b - a)
          .slice(0, 5)
          .reduce((acc, s) => acc + s, 0)
        / 5
      )
    ])
  });

  return result;
};