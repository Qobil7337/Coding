// Description
// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!
//
// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'
// words = ['hello', 'world', 'this', 'is', 'great']
// smash(words) # returns "hello world this is great"
// Assumptions
// You can assume that you are only given words.
// You cannot assume the size of the array.
// You can assume that you do get an array.

function smash(words: string[]): string {
    let sentence = '';
    if (words.length == 1) {
        return `${words[0]}`;
    }
    for (let i = 0; i < words.length; i++) {
        if (i == 0) {
            let word = words[i];
            sentence += `${word} `
        } else if (i == words.length - 1) {
            let word = words[i];
            sentence += `${word}`
        } else {
            let word = words[i]
            sentence += `${word} `
        }
    }
    return sentence;
}

const result = smash(['Hi', 'my', 'name', 'is', 'Koba'])
console.log(result);


// Variations
// export function smash (words: string[]): string {
//    return words.join(' ')
// };

// export const smash = (words: string[]): string => words.join(' ');
