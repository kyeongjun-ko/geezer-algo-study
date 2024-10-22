/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

var insert = function(intervals, newInterval) {
  const [intervalStart, intervalEnd] = newInterval;
  let newStartIndex, newEndIndex;
  const result = [];

  intervals.forEach(indexes => {
      const [startIndex, endIndex] = indexes;

      if (newStartIndex && newEndIndex) {
          result.push(indexes);

          return;
      }

      for (let index = startIndex; index <= endIndex; index++) {
          if (index === intervalStart) {
              newStartIndex = newStartIndex || startIndex;

              continue;
          }

          if (index === intervalEnd) {
              newEndIndex = endIndex;

              break;
          }
      }

      if (newStartIndex && newEndIndex) {
          result.push([newStartIndex, newEndIndex]);

          return;
      }
  });
};