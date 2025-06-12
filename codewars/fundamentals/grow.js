// Given a non-empty array of integers, return the result of multiplying the values together in order. Example:
//
// [1, 2, 3, 4] => 1 * 2 * 3 * 4 = 24
function grow(arr) {
    return arr.reduce(function (acc, currentValue) { return acc * currentValue; });
}
var result = grow([4, 4, 3, 1, 4]);
console.log(result);
