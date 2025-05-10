// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//
// Note: input will never be an empty string
function fakeBinary(x) {
    var returnString = [];
    var arrayOfDigits = x.split('');
    for (var i = 0; i < arrayOfDigits.length; i++) {
        if (+arrayOfDigits[i] < 5) {
            returnString.push('0');
        }
        else {
            returnString.push('1');
        }
    }
    return returnString.join('');
}
var result = fakeBinary('14893695842332');
console.log(result);
