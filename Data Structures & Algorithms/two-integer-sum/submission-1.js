class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {

    let indexedArray = [];

    for(let i=0;i<nums.length;i++){
        indexedArray.push([nums[i] , i]);
    }

    let sortedArray = indexedArray.sort((a,b)=>{
        return a[0] - b[0];
    });

    let i=0;
    let j=nums.length-1;
    let ans=[]

    while(i<j){
        let sum = sortedArray[i][0] + sortedArray[j][0];

        if(sum > target){
            j--;
        }
        else if(sum < target){
            i++;
        }
        else{
        return [Math.min(sortedArray[i][1] , sortedArray[j][1]), Math.max(sortedArray[i][1] , sortedArray[j][1])];

        }
    }

    return [];

    }
}