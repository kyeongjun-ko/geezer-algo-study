/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */

var floodFill = function (image, sr, sc, color) {
	const row = image.length;
	const column = image[0].length;
	const searchArea = [
		[-1, 0],
		[1, 0],
		[0, -1],
		[0, 1],
	];
	const visited = [...new Array(row)].map((e) => new Array(column).fill(0));
	const originColor = image[sr][sc];

	const dfs = (searchTarget, visitList) => {
		const [x, y] = searchTarget;

		if (visitList[x][y] === 0 && image[x][y] === originColor) {
			visitList[x][y] = 1;
			image[x][y] = color;

			searchArea.forEach((newXy) => {
				const [dX, dY] = newXy;
				const newX = x + dX;
				const newY = y + dY;

				if (
					newX >= 0 &&
					newX < row &&
					newY >= 0 &&
					newY < column &&
					image[newX][newY] === 0
				) {
					dfs([newX, newY], visitList);
				}
			});
		}

		return;
	};

	dfs([sr, sc], visited);
};
