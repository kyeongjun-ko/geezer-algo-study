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
 * @return {number}
 */

 /**
 문제 번역
 이진 트리의 루트가 주어졌을 때, 트리의 지름의 길이를 반환합니다. 이진 트리의 지름은 트리에서 두 노드 사이의 가장 긴 경로의 길이입니다. 이 경로는 루트를 통과할 수도 있고 통과하지 않을 수도 있습니다. 두 노드 사이의 경로의 길이는 두 노드 사이의 가장자리 수로 표현됩니다.

 의사코드
 1. 자식이 없을때까지 내려간다.
 2. 해당 자식에서 다시 부모가 없을떄까지 제일 먼 노드를 찾아가는 로직을 수행한다.
   */

 var diameterOfBinaryTree = function(root) {
    
 };