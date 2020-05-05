class UnionFind {
  constructor(defaultSize) {
    this.forest = Array(defaultSize).fill().map((v, i) => i);
    this.size = defaultSize;
  }

  findRoot(val) {
    if (this.forest[val] === val) return val;

    return this.findRoot(this.forest[val]);
  };

  union(val1, val2) {
    const root1 = this.findRoot(val1);
    const root2 = this.findRoot(val2);

    if (root1 === root2) return;

    if (root2 === val2) {
      this.forest[root2] = root1;
    } else {
      this.forest[root1] = root2;
    }
    this.size--;
  };
}


/**
 * @param {number[][]} circles
 * @return {number}
 */
const findCircleNum = function(circles) {
  const unionFind = new UnionFind(circles.length);

  for (const [i, relationship] of circles.entries()) {
    for (let j = i + 1; j < relationship.length; ++j) {
      if (relationship[j] !== 1) continue;

      unionFind.union(i, j);
    }
  }

  return unionFind.size;
}