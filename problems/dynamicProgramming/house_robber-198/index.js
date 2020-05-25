/**
 * @param {number[]} revenue
 * @return {number}
 */
export const rob = function(revenues) {
  let prev = 0;
  let current = 0;

  for (let revenue of revenues) {
    let tmp = current;
    current = Math.max(prev + revenue, current);
    prev = tmp;
  }

  return current;
};