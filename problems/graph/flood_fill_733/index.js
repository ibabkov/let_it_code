/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
export const floodFill = (image, sr, sc, newColor) => {
  const pos = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  const target = image[sr][sc];
  (function fill(row, col) {
    const exist = image[row] && image[row][col] !== undefined;
    if (!exist || image[row][col] !== target || image[row][col] === newColor) return;

    image[row][col] = newColor;

    for (let [r, c] of pos) {
      fill(r + row,c + col);
    }

  })(sr, sc);

  return image;
};