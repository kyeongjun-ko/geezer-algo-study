/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function (root) {
	const depths = [];

	const dfs = (node, depth) => {
		if (node === null) {
			return;
		}

		if (node.left === null || node.right === null) {
			depths.push(depth);

			if (node.left !== null) dfs(node.left, depth + 1);
			if (node.right !== null) dfs(node.right, depth + 1);

			return;
		}

		dfs(node.left, depth + 1);
		dfs(node.right, depth + 1);
	};

	dfs(root, 0);

	return depths.length === 0
		? true
		: Math.max(...depths) - Math.min(...depths) < 2;
};
