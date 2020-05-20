/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
export const addStrings = function(num1, num2, carry = 0) {
  if (!num1 && !num2)  return carry ? String(carry) : '';

  const a = 1 * num1.charAt(num1.length-1);
  const b = 1 * num2.charAt(num2.length-1);
  const sum = a + b + carry;

  return addStrings(
    num1.slice(0, num1.length - 1),
    num2.slice(0, num2.length - 1),
    sum > 9 ? 1 : 0,
  ) + sum % 10;
};