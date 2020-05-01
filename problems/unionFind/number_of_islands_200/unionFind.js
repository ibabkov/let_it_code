class Node {
  constructor() {
    this.parent = this;
  }
}

class UnionFind {
  constructor() {
    this.size = 0;
  }
  createSet = () => {
    this.size++;
    return new Node();
  };

  findRoot = (node) => {
    if (node === node.parent) return node.parent;

    return this.findRoot(node.parent);
  };

  union = (node1, node2) => {
    const root1 = this.findRoot(node1);
    const root2 = this.findRoot(node2);

    if(root1 === root2) return;

    this.size--;
    root2.parent = root1;
  }
}

/**
 * @param {character[][]} grid
 * @return {number}
 */
export const numIslands = function(grid) {
  const forest = new UnionFind();

  for (let row in grid) {
    for (let cell in grid[row]) {
      if (grid[row][cell] === '0') {
        grid[row][cell] = null;
        continue;
      }

      grid[row][cell] = forest.createSet();
      const left = grid[row][cell - 1];
      const top = row != '0' ? grid[row - 1][cell] : null;

      if (!(top || left )) continue;

      if (left) {
        forest.union(grid[row][cell], left);
      }
      if (top && (!left || forest.findRoot(left) != forest.findRoot(top))) {
        forest.union(top, grid[row][cell]);
      }

    }
  }
  return forest.size;
};
