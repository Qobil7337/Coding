// Description
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number. You can guarantee that input is non-negative.
//
// Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case

function countBits(n: number): number {
    const numArr: number[] = []
    const binaryString = n.toString(2)
    binaryString.split('').map((strNum) => numArr.push(Number(strNum)))
    return numArr.reduce((a, b) => a + b)
}

const result = countBits(1234)
console.log(result)


// Variations
// function countBits(n: number): number {
//   return n.toString(2)
//           .split('')
//           .reduce((sum, bit) => sum + Number(bit), 0)
// }

// export function countBits(n: number) {
//   return n.toString(2).split('').filter(c => c === '1').length
// }

// export function countBits(n: number) {
//   return n.toString(2)
//     .split('')
//     .map(Number)
//     .filter(Boolean)
//     .length;
// }
