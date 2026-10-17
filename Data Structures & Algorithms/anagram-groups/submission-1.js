class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        let groupedAnagram= {};

        for(const str of strs){
         const charCountArray = Array(26).fill(0);

         for(const char of str){
            charCountArray[char.charCodeAt() - 'a'.charCodeAt()] +=1;
         }

         if(!groupedAnagram[charCountArray]){
            groupedAnagram[charCountArray] = [];
         }

         groupedAnagram[charCountArray].push(str);
        }

        return Object.values(groupedAnagram);
    }
}
