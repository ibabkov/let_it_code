/**
 * @param {string} S
 * @return {string}
 */
export const removeDuplicates = function(S) {
    let stack = [];

    for (let char of S) {
        if (stack.length && stack[stack.length - 1] === char) {
            stack.pop();
            continue;
        }

        stack.push(char);
    }

    return stack.join('');
};