/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
    if (!head) {
        return null;
    }
    if (!head.next) {
        return head;
    }
    const first = head;
    const second = head.next;

    const dummy = swapPairs(second.next);
    second.next = first;
    first.next = dummy;
    return second;
};
