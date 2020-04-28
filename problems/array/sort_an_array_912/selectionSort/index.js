let swap = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

/**
 * @param {number[]} a
 * @return {number[]}
 */
function selectionSort(a) {
  if (!a.length) return 0;

  let arr = [...a];
  let isSorted = false;


  for (let i = 0; !isSorted && i < arr.length; i++) {
    let min = i;
    let sortedCounter = i;

    for (let j = i + 1; j <= arr.length; j++) {
      if (arr[j] < arr[min]) min = j;
      if (arr[j - 1] <= arr[j]) sortedCounter++;
    }

    if (sortedCounter === arr.length - 1) {
      isSorted = false;
    } else {
      swap(arr, i, min);
    }
  }

  return arr;
}

export const sortArray = selectionSort;
