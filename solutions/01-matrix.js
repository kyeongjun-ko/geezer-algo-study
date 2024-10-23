/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
  const row = mat.length;
  const column = mat[0].length;
  const result = mat.map(e => e.slice().fill(null));

  const findZero = (x, y, count) => {
      if (mat[x][y] === 0) return count;

      const searchTarget = [[-1, 0], [1, 0], [0, -1], [0, 1]];

      for (const [dx, dy] of searchTarget) {
          const newX = x + dx;
          const newY = y + dy;

          if (newX >= 0 && newY >= 0 && newX < row && newY < column) {
              if (mat[newX][newY] === 0) return count + 1;
          }
      };

      let distance = Infinity;

      for (const [dx, dy] of searchTarget) {
          const newX = x + dx;
          const newY = y + dy;

          if (newX >= 0 && newY >= 0 && newX < row && newY < column) {
              distance = Math.min(distance, findZero(newX, newY, count + 1));
          }
      }

      return distance;
  }

  for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
          result[i][j] = findZero(i, j, 0);
      }
  }

  return result;
};
