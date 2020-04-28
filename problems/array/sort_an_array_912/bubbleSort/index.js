let swap = (arr, x, y) => {
  const temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

/**
 * @param {number[]} a
 * @return {number[]}
 */
const bubbleSort = function(a) {
  if (!a.length) return 0;

  let arr = [...a];
  let end = arr.length - 1;
  let isSwapped = true;


  for (let i = 0; isSwapped && i < arr.length; i++) {
    isSwapped = false;

    for (let j = 1; j <= end; j++) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j);
        isSwapped = true;
      }
    }

    end--;
  }

  return arr;
};

export const sortArray = bubbleSort;
