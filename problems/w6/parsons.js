// function findSums(numbers, target) {
//     let results = [];
//     let range = Object.keys(numbers);
//     let range2 = Object.keys(range.slice(2));
//     // console.log(range);
//     // console.log(range2);

//     for (i of range) {
//         let first = numbers[i];
//         range2 = range.slice(i+1);
//         for (j of range2) {
//             range2 = range.slice(i+1);
//             let second = numbers[j];
//             if (first + second == target) {
//                 results.push([first,second]);
//             }
//         }
//     }
//     return results;
// }

function findSums(numbers, target) {
    let results = [];
    let first = 0;
    let second = 0;

    for (let i = 0; i < numbers.length - 1; i++) {
        first = numbers[i];
        for (let j = i+1; j < numbers.length; j++) {
            second = numbers[j];
            if (first + second == target) {
                results.push([first,second]);
            }
        }
    }
    return results;
}

const num = [2, 3, 1, 2]
const targ = 4

console.log(findSums(num,targ))
