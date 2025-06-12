// The cockroach is one of the fastest insects. Write a function which takes its speed in km per hour and returns it in cm per second, rounded down to the integer (= floored).
//
// For example:
//
// 1.08 --> 30
// Note! The input is a Real number (actual type is language dependent) and is >= 0. The result should be an Integer.

function cockroachSpeed(s: number): number {
    // 1 km = 1000 m
    // 1000 = 100 000 cm
    // let's say we need to find 1km per hour in m per minute
    // to do that we need to 1000 / 60 , where 1000 minutes we divide 60 minutes
    // we get 16,666... meter per minute
    // now we need to get cm per second
    // to do that we need to 1000 / 60 / 60 where 1000 minute / 60 minute / 60 second
    // we get 0,27777...
    // and now if we multiply any km to this number, we get cm per second
    const kmhToMs = 1000 / 3600;
    const metersPerSecond = s * kmhToMs;
    const centimetersPerSecond = metersPerSecond * 100;
    return Math.floor(centimetersPerSecond);
}

const result = cockroachSpeed(1.08)
console.log(result)

// Variations
// export function cockroachSpeed(s: number): number{
//   return Math.floor(s * 1000 * 100 / 60 / 60);
// }
