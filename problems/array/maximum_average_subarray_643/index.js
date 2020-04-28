/**
 * @param {number[]} arr
 * @param {number} subArrayLength
 * @return {number}
 */
export const findMaxAverage = function(arr, subArrayLength) {
  if (arr.length < subArrayLength) return null;

  let left = 0;
  let right = subArrayLength;
  let sum = 0;
  for (let i = 0; i < subArrayLength; i++) {
    sum += arr[i]
  }
  let maxAverage = sum / subArrayLength;

  while (right < arr.length) {
    sum = sum - arr[left] + arr[right] ;
    const average = sum / subArrayLength;

    if (average > maxAverage) {
      maxAverage = average;
    }

    right++;
    left++;
  }

  return maxAverage;
};