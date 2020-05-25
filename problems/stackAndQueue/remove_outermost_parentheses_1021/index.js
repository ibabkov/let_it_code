/**
 * @param {string} S
 * @return {string}   (())
 */
export const removeOuterParentheses = (S) => {
  let stack = [];
  let result = '';

  for(let char of S){
    if(char === '(') {
      if (stack.length > 0) result += char;
      stack.push(char);
    } else {
      if (stack.length > 1) result += char;
      stack.pop();
    }
  }
  return result;
};
