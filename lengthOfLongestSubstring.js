/** ==================================================================================== */
// Longest Substring Without Repeating Characters
// *
// Given a string, find the length of the longest substring without repeating characters.
/** ==================================================================================== */
/**
 * @param {string} s
 * @return {number}
 */
/** ==================================================================================== */
// Example 1:
// Input: "abcabcbb"
// Output: 3 
// Explanation: The answer is "abc", with the length of 3. 
// ----------
// Example 2:
// Input: "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// ----------
// Example 3:
// Input: "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3. 
//              Note that the answer must be a substring, "pwke" is a subsequence and not a substring.
/** ==================================================================================== */
/** PSEUDO_CODE ===================
 * Objective: Need to return the length of the substring that doesn't have repeating characters
 * Check substrings for duplicates, with the noDuplicate function 
 * Loop(i) over the string, for every iteration of the loop(i), Loop(j) over the string again.
 * Check if substring(i, j) has no duplicates
 *  if there are 0 duplicates, the substring is now the longest substring found
 *  else we have the longest substring and will return that result after the loops finish
 */ 

var lengthOfLongestSubstring = function(s) {
  // Function used to test substrings for duplicates by comparing lengths of the string vs the Set set object.
  // A set cannot have duplicates. If there are any, the length will be -1 for every duplicate. 
  const noDuplicates = str => {
    const set = [...new Set(str)];
    return (str.length === set.length) ? true : false;
  }

  // Declare variables
  let result = 0,
      maxResult = 0,
      i, j;

  // Edge cases    
  if (s.length === 1 || s === ' ') return 1;
  if (s.length === 2) {
    if (noDuplicates(s)) {
      maxResult = s.length;
    }
  }
  if (s.length === 3) {
    let testSet = [...new Set(s)];
    maxResult = testSet.length;
  }
  if (noDuplicates(s)) {
    maxResult = s.length;
  }

  // Loop over s.length - 1, so i's loop won't run out of +1's for j's loop.
  for (i = 0; i < s.length - 1; i++) {
    for (j = i + 1; j < s.length; j++) {
      // if the substring contains no duplicates
      if (noDuplicates(s.substring(i, j))) {
        // result becomes the length of the substring
        result = s.substring(i, j).length;
        // if the result is larger than the current maxResult, set maxResult = result. 
        if (result > maxResult) { 
          maxResult = result;
        }
      }
    } // end j
  } // end i
  console.log(maxResult);
  return maxResult;
};

// console.log('abcabcbb', lengthOfLongestSubstring("abcabcbb"));
// console.log('WhiteSpace', lengthOfLongestSubstring(" "));
// console.log('au', lengthOfLongestSubstring("au"));
// console.log('aab', lengthOfLongestSubstring("aab"));
console.log('brnk', lengthOfLongestSubstring("brnk"));