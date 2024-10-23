/**
 * @param {number[][]} mat
 * @return {number[][]}
 */

var changed=[]
var updateMatrix = function(mat) {
    for(let i = 0; i < mat.length; i++) {
        for(let j = 0; j < mat[0].length; j++) {
            if(mat[i][j] === 1) {
                mat[i][j] = bfs(mat, i, j);
                changed.push([i, j])
            }
        }
    }
    return mat;
};

function bfs(mat, i, j) {
    var queue = [];
    queue.push([i, j]);
    var ans = 0;
    while(queue.length > 0) {
        var [x, y] = queue.shift();
        var dx = [1, -1, 0, 0];
        var dy = [0, 0, 1, -1];

        for(let k = 0; k < 4; k++) {
            var nx = x + dx[k];
            var ny = y + dy[k];

            if(nx >= mat.length || nx < 0 || ny >= mat[0].length || ny < 0 || mat[nx][ny] ===0){
                return ans + 1;
            } 
            else {
                continue;
            }
        }
        ans++;
    }
} 