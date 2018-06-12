/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  for (const [li, lval] of nums.entries()) {
    for (const [ri, rval] of nums.entries()) {
      if (lval + rval == target && ri != li) {
        return [li, ri];
      }
    }
  }
};