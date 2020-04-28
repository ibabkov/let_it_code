function merge(arr1, arr2) {
  let result = [];
  let end = 0;

  if (!arr2.length) return arr1;
  if (!arr1.length) return arr2;

  for (let a of arr1) {
    for(let j = end; j < arr2.length && arr2[j] <= a; j++) {
      result.push(arr2[j]);
      end++;
    }

    result.push(a);
  }

  if (arr2.length !== end) result = result.concat(arr2.slice(end));

  return result;
}

function divide(arr) {
  let result = [];
  const middle = Math.floor(arr.length / 2)

  return [arr.slice(0, middle), arr.slice(middle)];
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;

  const [arr1, arr2] = divide(arr);

  return merge(mergeSort(arr1), mergeSort(arr2));
}

export const sortArray = mergeSort;
