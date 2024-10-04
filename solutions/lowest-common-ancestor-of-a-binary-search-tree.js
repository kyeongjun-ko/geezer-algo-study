/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

var lowestCommonAncestor = function (root, p, q) {
	const getIndexes = (node, target, parentIndex, index = 0) => {
		if (node === null) {
			parentIndex[index] = node;

			return parentIndex;
		}

		const value = node.val;
		parentIndex[index] = value;

		if (node.left !== undefined) {
			const leftIndex = index + 1;

			findParentIndex(node.left, target, parentIndex, leftIndex);
		}

		if (node.right !== undefined) {
			const rightIndex = index + 2;

			findParentIndex(node.right, target, parentIndex, rightIndex);
		}

		return parentIndex;
	};

	const pIndexes = getIndexes(root, p.val, {});
	const qIndexes = getIndexes(root, q.val, {});
};
