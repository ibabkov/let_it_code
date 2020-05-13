/**
 * @param {number[][]} costs
 * @return {number}
 */
export var minCost = function(costs) {
  if (!costs.length) return 0;

  for (let i = 0; i + 1 < costs.length; i++) {
    for (let j = 0; j < 3; j++) {
      costs[i+1][j] += Math.min(costs[i][(j+1)%3], costs[i][(j+2)%3])
    }
  }
  return Math.min(...costs.pop());
};