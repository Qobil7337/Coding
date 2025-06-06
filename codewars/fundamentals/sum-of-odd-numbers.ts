// Description
// Given the triangle of consecutive odd numbers:
//
//              1
//           3     5
//        7     9    11
//    13    15    17    19
// 21    23    25    27    29
// ...
// Calculate the sum of the numbers in the nth row of this triangle (starting at index 1) e.g.: (Input --> Output)
//
// 1 -->  1
// 2 --> 3 + 5 = 8


// n * (n + 1) / 2 this formula i got from Chat ))

function rowSumOddNumbers(n: number) {
    const numbers = []
    const numberOfTimesLoopShouldRun = n * (n + 1) / 2
    if (n == 1) return 1
    for (let i = 0; i < numberOfTimesLoopShouldRun - 1; i++) {
        if (i == 0) numbers.push(1)
        numbers.push(numbers[i] + 2)
    }
    const start = numbers.length - n
    console.log(start)
    return numbers.slice(start, numbers.length).reduce((a, b) => a + b)
}

const result = rowSumOddNumbers(101)
console.log(result)


// Variations
// export function rowSumOddNumbers(n: number) {
//   return Math.pow(n, 3)
// }

// export const rowSumOddNumbers = (n: number) => n ** 3;
