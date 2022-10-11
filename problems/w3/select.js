// Write a function called "select".

// Given an array and an object, "select" returns a new object whose properties are those in the given object AND whose keys are present in the given array.

// If keys are present in the given array, but are not in the given object, it should ignore them
// It does not modify the passed in object
// let arr = ['a', 'c', 'e'];
// let obj = {
//   a: 1,
//   b: 2,
//   c: 3,
//   d: 4
// };
// let output = select(arr, obj);
// console.log(output); // --> { a: 1, c: 3 }
// See the python implementation
// def select(keys, dictionary):
//     d = dict()
//     for key in keys:
//         if key in dictionary:
//             d[key] = dictionary[key]
//     return d

function select(arr, obj) {
  // your code here

  let output = {};

  for (let i in obj) {
      if (arr.includes(i)) {
          output[i] = obj[i];
      }
  }
  return output;
}
