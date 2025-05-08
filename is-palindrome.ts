// Description:
// Write a function that checks if a given string (case insensitive) is a palindrome.
//
// A palindrome is a word, number, phrase, or other sequence of symbols that reads the same backwards as forwards, such as madam or racecar.

function isPalindrome(x: string): boolean {
    const str = x.toLowerCase();
    const reversedStr = x.toLowerCase().split('').reverse().join('');
    return str === reversedStr;
}

const result = isPalindrome('AasbbsaA');
console.log(result);


// variations
// function isPalindrome(x: string): boolean {
//     return x.toLowerCase().split('').reverse().join('') == x.toLowerCase();
// }
