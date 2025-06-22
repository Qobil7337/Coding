// Description
// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).
//
// Examples:
//
// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

function solution(str: string, ending: string): boolean {
    const strToCompare = str.slice(str.length - ending.length, str.length)
    return strToCompare.toLowerCase() == ending.toLowerCase()
}

const result = solution('helloworld', 'world')
console.log(result)

// Variations
// export function solution(str: string, ending: string): boolean {
//   return str.endsWith(ending);
// }

// export const solution = (str: string, ending: string): boolean => str.endsWith(ending);
