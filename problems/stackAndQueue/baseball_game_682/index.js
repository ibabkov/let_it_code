/**
 * @param {string[]} ops
 * @return {number}
 */
export const calPoints = function(ops) {
  let total = [];

  for (let operation of ops) {
    switch(operation) {
      case('+'):
        total.push(Number(total[total.length - 1]) + Number(total[total.length - 2]));
        break;
      case('C'):
        total.pop();
        break;
      case('D'):
        total.push(2 * total[total.length - 1]);
        break;
      default:
        total.push(Number(operation));
        break;
    }
  }

  return total.reduce((a, b) => a + b, 0);
};