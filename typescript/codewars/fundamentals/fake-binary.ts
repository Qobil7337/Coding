// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
//
// Note: input will never be an empty string

function fakeBinary (x: string): string {
    const returnString : string[] = []
    const arrayOfDigits = x.split('')
    for (let i = 0; i < arrayOfDigits.length; i++) {
        if (+arrayOfDigits[i] < 5) {
            returnString.push('0')
        } else {
            returnString.push('1')
        }
    }
    return returnString.join('')
}

const result = fakeBinary('14893695842332')
console.log(result)

// variations
// export const fakeBin = (x:string):string => x.replace(/\d/g, n => Number(n) < 5 ? '0' : '1');

// export const fakeBin = (x:string):string => {
//   return x.replace(/\d/g, num => +num < 5 ? '0' : '1');
// };

//export const fakeBin = (x:string):string => x.split("").map(d => +d < 5 ? "0" : "1").join("")

//export const fakeBin = (x:string):string => {
//   var a = x.split('')
//   for (var i = 0 ; i < a.length ; i++ )
//   {
//     if ( parseInt(a[i]) < 5 )
//         a[i] = "0"
//     else
//         a[i] = "1"
//   }
//   return a.join('')
// };
