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
        dfs(grid, row, cell)
      }
    }
  }
  return counter;
};

function dfs(grid, row, cell) {
  if(grid[row][cell] === '1') grid[row][cell] = '0';

  for (let [x, y] of [[0, -1], [1, 0], [0, 1], [-1, 0]]) {
    if(grid[row + y] && grid[row + y][cell + x] === '1') {
      dfs(grid, row + y, cell + x);
    }
  }
}