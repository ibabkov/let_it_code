/**
 * @param {character[]} chars
 * @return {number}
 */
export const compress = function(chars) {
  let p1 = 0, counter = 1;

  while (p1 + counter <= chars.length) {
    if (chars[p1] === chars[p1 + counter]) {
      counter++;
      continue;
    }
    let counterLength = 0;

    if (counter > 1) {
      counterLength = String(counter).length;
      chars.splice(
        p1 + 1,
        counter - 1,
        ...String(counter),
      );
    }

    p1 = p1 + counterLength + 1;
    counter = 1;
  }

  return chars.length;
};