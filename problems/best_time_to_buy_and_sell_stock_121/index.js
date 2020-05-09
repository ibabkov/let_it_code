/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function(prices) {
  let minPrice = Infinity;

  return prices.reduce(
    (maxProfit, num) => {
      if ( num - minPrice > maxProfit) return num - minPrice;

      minPrice = Math.min(minPrice, num);

      return maxProfit;
    }
    ,0
  );
};