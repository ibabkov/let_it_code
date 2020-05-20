/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
export const addBinary = (a, b) => (BigInt('0b' + a) + BigInt('0b' + b)).toString(2);