/**
 *
 * @param string
 * @param pattern
 * @returns {boolean}
 */
const isMatch = function(string, pattern) {
  return Boolean(string.match(new RegExp(pattern, 'gm')));
};

/**
 *
 * @param string
 * @param pattern
 * @returns {boolean}
 */
const isFullMatch = function(string, pattern) {
  return string === pattern;
};

/**
 *
 * @param string
 * @param pattern
 * @param newString
 * @returns {string[] | null}
 */
const replace = function(string, pattern, newString) {
  return string.replace(new RegExp(pattern, 'gm'), newString)
};

console.log('isMatch', isMatch('string', 'st'));

console.log('isFullMatch', isFullMatch('string', 'st'));

console.log('replace', replace('string', 'st', 'fire '));
