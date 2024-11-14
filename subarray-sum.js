/* Array Manipulation
Problem: Given an array of integers, write a function to find the maximum sum of a non-empty subarray, 
where the subarray’s elements are contiguous.

Function Signature:
    function maxSubarraySum(nums) {
    }

Example:
    Input: [1, -2, 3, 4, -1, 2, 1, -5, 4]
    Output: 8 (The subarray [3, 4, -1, 2, 1] gives the maximum sum.)

Explanation: You would need to implement an efficient solution, ideally with a time complexity of O(n), 
using an algorithm like Kadane’s Algorithm.
*/

function maxSubarraySum(nums) {
    let subSum = nums[0];
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        subSum = Math.max(nums[i], subSum + nums[i]);
        maxSum = Math.max(maxSum, subSum);
    }
    return maxSum;
};
console.log(maxSubarraySum([1, -2, 3, 4, -1, 2, 1, -5, 4]));