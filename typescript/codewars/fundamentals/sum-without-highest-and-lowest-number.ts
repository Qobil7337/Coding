// Description
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).
//
// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.
//
// Mind the input validation.
//
// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6

// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

function sumArray(array: number[] | null): number {
    if (array == null || array.length <= 1) return 0
    const min = Math.min(...array)
    const max = Math.max(...array)
    const sum = array.reduce((acc, currentValue) => acc + currentValue)
    return sum - max - min;
}

const result = sumArray([8,4,90,22,6,1,6,1,9,8,5,3])
console.log(result)

// Variations
// export function sumArray(array:number[]) : number {
//   if (!array || array.length <= 1) return 0;
//   return array.sort((a, b) => a - b).slice(1, -1).reduce((p, n) => p + n, 0);
// }

// export function sumArray(array:number[]) : number {
// 	if (array && array.length > 1) {
//   	return (array.reduce((a, b) => a + b, 0) - Math.max(...array) - Math.min(...array));
//   }
//   return 0;
// }
