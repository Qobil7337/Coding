<?php
// Description
// Write a function to find the longest common prefix string amongst an array of strings.
//
//If there is no common prefix, return an empty string "".
//
//
//
//Example 1:
//
//Input: strs = ["flower","flow","flight"]
//Output: "fl"
//Example 2:
//
//Input: strs = ["dog","racecar","car"]
//Output: ""
//Explanation: There is no common prefix among the input strings.
//
//
//Constraints:
//
//1 <= strs.length <= 200
//0 <= strs[i].length <= 200
//strs[i] consists of only lowercase English letters if it is non-empty.

function longestCommonPrefix($strs) {
    for ($i = 0; $i < strlen($strs[0]); $i++) {
        for ($j = 1; $j < count($strs); $j++) {
            if (strlen($strs[$j]) <= $i || $strs[0][$i] !== $strs[$j][$i]) {
                return substr($strs[0], 0, $i);
            }
        }
    }
    return $strs[0];
}

$result = longestCommonPrefix(["ab", "a"]);
var_dump($result);