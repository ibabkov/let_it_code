/**
 * @param {number} N
 * @param {number[][]} trust
 * @return {number}
 */
export const findJudge = function(N, trust) {
  if (trust.length < N - 1) return -1;
  if (N === 1) return 1;
  let outdegrees = new Map();
  let indegrees = new Map();
  let judge = -1;

  for (let [start, end] of trust) {
    indegrees.set(end, (indegrees.get(end) || 0) + 1);
    outdegrees.set(start, (outdegrees.get(start) || 0) + 1);
  }

  indegrees.forEach((val, key) => {
    if (val == N - 1 && !outdegrees.has(key)) {
      judge = key;
      return;
    }
  });

  return judge;
};