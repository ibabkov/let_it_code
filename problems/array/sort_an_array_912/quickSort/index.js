function swap(arr, x, y) {
  [arr[x], arr[y]] = [arr[y], arr[x]];
}

function getIndexAndSwap(arr, start = 0, end = arr.length - 1) {
  const base = arr[start];

  for(var i = start + 1, j = start; i <= end; i++) {
    if (arr[i] < base) {
      swap(arr, i, ++j);
    }
  }
  swap(arr, start, j);

  return j;
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function quickSort(arr) {
  if (arr.length <= 1) return arr;

  function innerFn(left, right) {
    if (left <= right) {
      const index = getIndexAndSwap(arr, left, right);

      innerFn(left, index - 1);
      innerFn(index + 1, right);
    }
  }

  innerFn(0, arr.length -1);

  return arr;
}

export const sortArray = quickSort;
