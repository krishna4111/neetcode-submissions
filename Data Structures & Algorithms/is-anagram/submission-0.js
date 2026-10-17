class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let str1 = {};
        let str2 = {};

        if(s.length !== t.length){
            return false;
        }

        for(let i=0;i<s.length;i++){
            if(str1[s.charAt(i)]){
                str1[s.charAt(i)] +=1;
            }
            else{
            str1[s.charAt(i)]= 1;
            }
        }

        console.log("str1" , str1)
    
       for(let i=0;i<t.length;i++){
        if(str2[t.charAt(i)]){
            str2[t.charAt(i)] +=1;
        }
        else{

        str2[t.charAt(i)] = 1;
        }
       }

       console.log("str2" , str2)

    for(let i=0;i<s.length;i++){
      if(str1[s.charAt(i)] !== str2[s.charAt(i)]){
        return false;
      }
    }
    return true;

    }
}
