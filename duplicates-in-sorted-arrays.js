/*
Remove Duplicates from Sorted Array
 
Input: nums = [1,1,2]
Output: 2, nums = [1,2,_]
Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
Example 2:

Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]
Explanation: Your function should return k = 5, with the first five elements of nums being 0, 1, 2, 3, and 4 respectively.
It does not matter what you leave beyond the returned k (hence they are underscores).
 https://leetcode.com/problems/remove-duplicates-from-sorted-array/submissions/942172409/

 NOTE: The description of this problem suggest that nums should be the one that change, an O(i) solutions means to change the current array instead of generated a new one O(n)
*/

var removeDuplicates = function (nums) {
    let l = 1

    for (let r = 1; r < nums.length; r++) {
        if(nums[r] != nums[r-1]){
            nums[l] = nums[r]
            l ++
        }
    }

    return l
};

console.log(removeDuplicates([1, 1, 2]))


/*

scala solution
def removeDuplicates(nums: Array[Int]): Int = {
    var freq = Map[Int, Int]()
    var uniqueNums = Array[Int]()
    for (num <- nums) {
        freq += (num -> (freq.getOrElse(num, 0) + 1))
        if (freq(num) == 1) {
            uniqueNums :+= num
        }
    }
    for (i <- 0 until uniqueNums.length) {
        nums(i) = uniqueNums(i)
    }
    return uniqueNums.length
}

*/