// Write a function called "countWords". You may want to look at the split method on the JavaScript String object.

// Given a string, "countWords" returns an object where each key is a word in the given string, with its value being how many times that word appeared in the given string.

// If given an empty string, it should return an empty object.

// let output = countWords('ask a bunch get a bunch');
// console.log(output); // --> {ask: 1, a: 2, bunch: 2, get: 1}
// See the python implementation
// def count_words(string):
//     counts = dict()
//     for word in string.split(" "):
//         if len(word) > 0:
//             if word not in counts:
//                 counts[word] = 0
//             counts[word] += 1
//     return counts

function countWords(str) {
    // your code here
    const arr = str.split(" ");
    let output = {}

    for (let i of arr) {
        if (i) {
            if (output[i] === undefined) {
                output[i] = 1;
            }
            else {
                output[i]++;
            }
        }
    }
    return output;
  }
