class Node {
  constructor(val) {
    this.size = 1;
    this.val = val;
    this.parent = this;
  }
}

/**
 * @param node
 * @returns Node
 */
const findRoot = (node) => {
  if (node === node.parent) return node.parent;

  return findRoot(node.parent);
};

/**
 * @param node1
 * @param node2
 * @returns number
 * @description returns new size of the root node
 */
const union = (node1, node2) => {
  if (!(node1 && node2)) return 0;
  const root1 = findRoot(node1);
  const root2 = findRoot(node2);

  if(root1 === root2) return;

  root2.parent = root1;
  return root1.size += root2.size;
};

/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function(nums) {
  let set = new Set(nums);
  let map = {};
  let max = 0;

  set.forEach((num) => {
    const node = new Node(num);
    const prevNum = num - 1;
    const nextNum = num + 1;

    if (node.size > max ) max++;

    map[num] = node;

    if(map[prevNum] || map[nextNum]) {
      const rootSize = Math.max(union(map[prevNum], map[num]), union(map[num], map[nextNum]));

      if (rootSize > max) max = rootSize;
    }
  });

  return max;
};
