/**
 * @param {character[][]} grid
 * @return {number}
 */
export const numIslands = function(grid) {
  let counter = 0;

  for (let row = 0; row < grid.length; row++) {
    for( let cell = 0; cell < grid[row].length; cell++) {
      if(grid[row][cell] === '1') {
        counter++;
        bfs(grid, row, cell)
      }
    }
  }
  return counter;
};

function bfs(grid, r, c) {
  let queue = [[r, c]];
  grid[r][c] = '0';

  while(queue.length) {
    const [row, cell] = queue.pop();

    for (let [x, y] of [[0, -1], [1, 0], [0, 1], [-1, 0]]) {
      if(grid[row + y] && grid[row + y][cell + x] === '1') {
        queue.push([row + y, cell + x]);
        grid[row + y][cell + x] = '0';
      }
    }
  }
}