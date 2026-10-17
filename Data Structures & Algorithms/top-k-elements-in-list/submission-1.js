class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let frequencyCounter = {};
        let ans = [];

        for (let i = 0; i < nums.length; i++) {
            frequencyCounter[nums[i]] = (frequencyCounter[nums[i]] || 0) + 1;
        }

        const sortedEle = Object.entries(frequencyCounter).sort((a, b) => {
            return b[1] - a[1];
        });

        const slicedArray = sortedEle.slice(0, k);

        for (const arr of slicedArray) {
            ans.push(arr[0]);
        }

        return ans;
    }
}
