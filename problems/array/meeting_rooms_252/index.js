/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
export const canAttendMeetings = function(intervals) {
  if (!intervals || !intervals.length) return true;
  return !(intervals
    .sort(([a], [b]) => a - b)
    .some(([start, finish], i, arr) => {
      if (!arr[i + 1]) return false;
      const [startNext] = arr[i + 1];

      return finish > startNext;
    }));
};