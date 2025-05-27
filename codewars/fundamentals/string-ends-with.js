// Description
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false
function solution(str, ending) {
    var endingStrLength = ending.length;
    var strToCompare = str.slice(str.length - endingStrLength, str.length);
    return strToCompare.toLowerCase() == ending.toLowerCase();
}
var result = solution('helloworld', 'world');
console.log(result);
