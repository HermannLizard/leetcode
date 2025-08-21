/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = function(nums) {
    if (!nums.length) return [];
    if (nums.length === 1) return nums;
    let i;
    for (i = nums.length - 1; i > 0; i--) {
        if (nums[i] > nums[i - 1]) {
            for (let j = nums.length - 1; j >= i; j--) {
                if (nums[j] > nums[i - 1]) {
                    swap(nums, i - 1, j);
                    break;
                }
            }
            break;
        }
    }
    let l = i;
    let r = nums.length - 1;
    while (l < r) {
        swap(nums, l, r);
        l++;
        r--;
    }

    function swap(arr, a, b) {
        const tmp = arr[a];
        arr[a] = arr[b];
        arr[b] = tmp;
    }

    return nums;
};