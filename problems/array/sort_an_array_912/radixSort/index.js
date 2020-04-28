function getDigit(num, i) {
  const digit = Math.floor(Math.abs(num) / Math.pow(10, i)) % 10;

  return num < 0 ? 9 - digit : digit;
}

function getCount(num) {
  return num.toString().length;
}

function getMaxCount(arr) {
  return arr.reduce((acc, num) => Math.max(acc, getCount(num)), 0);
}

function getBuckets() {
  return [[], [], [], [], [], [], [], [], [], []];
}

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function radixSort(arr) {
  let isSorted = false;
  const maxCount = getMaxCount(arr);

  if (arr.length === 1) return arr;

  for (let i = 0; !isSorted && i < maxCount; i++) {
    const positiveBuckets = getBuckets();
    const negativeBuckets = getBuckets();
    let j = 0;
    let sortCounter = 1;

    while (j < arr.length) {
      const num = arr[j];
      const digit = getDigit(num, i);

      if (j < arr.length - 1 && num < arr[j + 1]) sortCounter++;

      (num < 0 ? negativeBuckets : positiveBuckets)[digit].push(num);
      j++;
    }
    if (sortCounter === arr.length) isSorted = true;

    arr = [].concat(...negativeBuckets, ...positiveBuckets, );
  }

  return arr;
}

export const sortArray = radixSort;
