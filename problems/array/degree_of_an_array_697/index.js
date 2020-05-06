const getLength = (node) => {
  return node.last - node.first + 1;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
export const findShortestSubArray = function(nums) {
  if (nums.length <= 1) return nums.length;

  let map = new Map([[nums[0], { first: 0, last:0, degree: 1 }]]);
  let minLengthNum = nums[0];
  let i = 1;

  for (let i = 1; i < nums.length; i++) {
    const num = nums[i];
    let current = map.get(num);
    const prev = map.get(minLengthNum);
    if (!current) {
      map.set(num, { first: i, last:i, degree: 1 });
      continue;
    }

    map.set(num, { first: current.first, last: i, degree: current.degree + 1 });

    current = map.get(num);

    if(
      current.degree > prev.degree
      || (current.degree === prev.degree && getLength(current) < getLength(prev))
    ) minLengthNum = num;
  }

  return getLength(map.get(minLengthNum));
};