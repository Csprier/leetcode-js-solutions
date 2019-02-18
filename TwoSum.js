/* ================================================
 * Given an array of integers, return indices of the two numbers such that they add up to a specific target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * ================================================
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * ================================================
 * Given nums = [2, 7, 11, 15], target = 9,
 * Because nums[0] + nums[1] = 2 + 7 = 9,
 * return [0, 1].
 * ================================================
 */

var twoSum = function(nums, target) {
  let result = [], i, x;
  
  for (i = 0; i < nums.length; i++) { // Loop over nums
    for (x = i + 1; x < nums.length; x++) { // Nested loop over nums starting at i + 1(the next index)
      if (nums[i] + nums[x] === target) { // if nums[i] + nums[x] equals target
        result.push(i); // push i index
        result.push(x); // push x index
      }
    }
  }
  return result; // return result
};

twoSum([3, 3], 6);
twoSum([2, 7, 11, 15], 9);
twoSum([3, 2, 4], 6);
twoSum([3, 2, 1, 5, 6, 4], 11);
