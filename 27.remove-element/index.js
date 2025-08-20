/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    if (nums.length === 1 && nums[0] === val) {
        return 0;
    }
    let ans = 0;
    let l = 0;
    let r = nums.length - 1;
    while (l < r) {
        while (nums[r] === val && l < r) {
            r--;
        }
        if (nums[l] === val) {
            nums[l] = nums[r];
            r--;
        }
        l++;
    }
    return nums[r] === val ? r : r + 1;
};