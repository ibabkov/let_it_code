/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = function(s) {
  if (!s.length) return true;
  if (s.length % 2 === 1) false;
  debugger;
  const queue = [];
  const map = new Map([
    ['}', '{'],
    [')', '('],
    [']', '['],
  ]);

  for (let char of s) {
    if(queue.length && queue[0] === map.get(char))  {
      queue.shift();
      continue;
    }

    queue.unshift(char);
  }

  return queue.length === 0;
};