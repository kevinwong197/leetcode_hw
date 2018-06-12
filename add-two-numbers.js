/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  var phead = new ListNode(-1);
  var head = phead;
  var extra = 0;
  while(l1 != null || l2 != null || extra != 0) {
    let sum = (l1 ? l1.val : 0) + (l2 ? l2.val : 0) + extra;
    extra = Math.trunc(sum / 10);
    head.next = new ListNode(Math.trunc(sum % 10));
    head = head.next;
    l1 = l1 ? l1.next : l1;
    l2 = l2 ? l2.next : l2;
  }
  return phead.next;
};