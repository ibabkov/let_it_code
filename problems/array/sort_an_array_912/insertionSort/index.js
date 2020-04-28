/**
 * @param {number[]} a
 * @return {number[]}
 */
function insertionSort(a) {
  if (a.length <= 1) return a;

  let arr = [...a];

  for (let i = 1; i < arr.length; i++) {
    const currentValue = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > currentValue) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentValue;
  }

  return arr;
}
export const sortArray = insertionSort;
