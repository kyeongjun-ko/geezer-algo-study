/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function(mat) {
    const m = mat.length, n = mat[0].length;
    const queue = [];
    const MAX_VALUE = m * n;

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j]);
            } else {
                mat[i][j] = MAX_VALUE;
            }
        }
    }
    
    const directions = [[1, 0], [-1, 0], [0, 1], [0, -1]];
    while (queue.length) {
        const [x, y] = queue.shift();
        for (const [dx, dy] of directions) {
            const nx = x + dx, ny = y + dy;
            if (nx >= 0 && nx < m && ny >= 0 && ny < n && mat[nx][ny] > mat[x][y] + 1) {
                mat[nx][ny] = mat[x][y] + 1;
                queue.push([nx, ny]);
            }
        }
    }
    
    return mat;
};