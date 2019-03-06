/**
 * ================================================
 * You are given two non-empty linked lists representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes contain a single digit. 
 * Add the two numbers and return it as a linked list.
 * ================================================
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 * ================================================
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 * ================================================
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}

var addTwoNumber = function(l1, l2) {
  let node1 = l1,
      node2 = l2,
      carry = 0,
      sum = 0;

  const rNode = new ListNode(0); // create the 'r'esultNode.
  let currentNode = rNode;
}

addTwoNumbers([ 2, 4, 3 ], [ 5, 6, 4 ]); // [ 7, 0, 8 ]

/*
// ARRAY VERSION =================================================================
var addTwoNumbers = function(l1, l2) {
  // reverse each 'linked list' and join them.
  // Join them and add the integers, make the number a string, split it, put it in an array
  // return that number in a 'linked list'/array
  let copy1 = '', 
      copy2 = '',
      newNum = 0,
      str = '',
      result = [];

  for (let i = 0; i < l1.length; i++) {
    copy1 += l1[i];
  }
  for (let i = 0; i < l2.length; i++) {
    copy2 += l2[i];
  }
  newNum = Number(copy1) + Number(copy2); // newNum = the string numbers added
  str = newNum.toString().split(''); // str = newNum turned into a string and split into an array
  for (let i = str.length - 1; i >= 0; i--) {
    str[i] = Number(str[i]);
    result.push(str[i]);
  }
  return result; // return the result array
};*/
