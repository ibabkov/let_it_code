/**
 * @param {number[]} time
 * @return {number}
 */
export var numPairsDivisibleBy60 = function(time) {
  const durations = new Map();

  return time.reduce(
    (count, duration) => {
      let mod = duration % 60;
      let remainder = mod === 0 ? 0 : 60 - mod;

      if (durations.has(remainder)) count += durations.get(remainder);

      durations.set(mod, (durations.get(mod) || 0) + 1);

      return count;
    },
    0,
  );
};