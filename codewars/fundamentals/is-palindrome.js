// Description:
// Write a function that checks if a given string (case insensitive) is a palindrome.
//
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.
function isPalindrome(x) {
    var str = x.toLowerCase();
    var reversedStr = x.toLowerCase().split('').reverse().join('');
    console.log(str);
    console.log(reversedStr);
    return str === reversedStr;
}
var result = isPalindrome('AasbbsaA');
console.log(result);
