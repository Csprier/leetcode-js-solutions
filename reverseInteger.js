// Given a 32-bit signed integer, reverse digits of an integer.
//**
// Example 1:
  // Input: 123
  // Output: 321
  // Example 2:
  // Input: -123
  // Output: -321
  // Example 3:
  // Input: 120
  // Output: 21
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let neg = '', // declare variables
      result = '',
      copy = x.toString().split(''); // stringify and create an array of the number

  if (copy[0] === '-') {
    neg = copy.shift(); // capture the -
    copy.reverse().unshift(neg); // reverse the array and add '-' to the beginning
    copy.forEach(s => result += s); // create the result string
    result = parseInt(result); // make result typeof number
    if (result < -2147483648) { // check that 32-bit signed integer range isn't exceeded
      return 0;
    }
    return result;
  } 
  else {
    copy.reverse(); // reverse the array
    copy.forEach(s => result += s); // create the result string
    result = parseInt(result); // Make result typeof number
    if (result > 2147483648) { // check that 32-bit signed integer range isn't exceeded
      return 0;
    }
    return result;
  }
};

reverse(-123);
reverse(123);
reverse(1534236469);