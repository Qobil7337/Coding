// Description
// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.
// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str: string): string {
    const strArr = str.split(' ')
    let result = ''
    for (let i = 0; i < strArr.length; i++) {
        if (i == strArr.length - 1) {
            result += `${strArr[i].split('').reverse().join('')}`
            continue
        }
        result += `${strArr[i].split('').reverse().join('')} `
    }
    return result
}

const result = reverseWords('The quick brown fox jumps over the lazy dog.')
console.log(result)

// Variations
// const reverse = (x: string) => x.split('').reverse().join('')
// export const reverseWords = (str: string): string => str.split(' ').map(reverse).join(' ');

// export function reverseWords(sentence: string): string {
//   return sentence
//     .split(' ')
//     .map(
//           word => word
//                 .split('')
//                 .reverse()
//                 .join('')
//     )
//     .join(' ');
// }
