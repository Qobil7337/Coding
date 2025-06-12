// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24

function grow(arr: number[]): number {
    return arr.reduce((acc, currentValue) => acc * currentValue, 1)
}

const result = grow([4, 4, 3, 1, 4])
console.log(result)


// Variations
// export const grow = (arr: number[]) => arr.reduce((accum, it) => accum * it);
// export function grow(arr: number[]) {
//   return arr.reduce((prev,curr) => prev * curr);
// }
// function multiplyArrayValues(arr: number[]): number {
//   let product = 1;
//   for (let i = 0; i < arr.length; i++) {
//     product *= arr[i];
//   }
//   return product;
// }
//
// // Example usage:
// const result = multiplyArrayValues([1, 2, 3, 4]);
// console.log(result); // Output: 24
