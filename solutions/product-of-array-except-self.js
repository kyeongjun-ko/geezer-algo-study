/**
 * @param {number[]} nums
 * @return {number[]}
 */

var productExceptSelf = function(nums) {
  const result = [];
  const resultMap = {};

  for (let i = 0; i < nums.length; i++) {
      resultMap[i] = 1;
  }

  for (let i = 0; i < nums.length; i++) {
      const target = nums[i];
      const copy = [...nums];

      copy.splice(i, 1);

      const resultSum = copy.reduce((acc, cur) => acc * cur , 1);
      
      result.push(resultSum);
  }

  return result;
};