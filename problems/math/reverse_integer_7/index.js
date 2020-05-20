/**
 * @param {number} x
 * @return {number}
 */
export const reverse = (x) => {
  if (!x) return 0;

  const limit = 2 ** 31;
  let num = x < 0  ? '-' : '';
  const str = String(Math.abs(x));

  for (let i = str.length - 1; i >= 0; i--) {
    num += str[i];
  }

  num = Number(num);

  if ((num >= limit - 1) || (num < -limit)) return 0;

  return num;
};