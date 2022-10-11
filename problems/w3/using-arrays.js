function getNthElement(array, n) {
    // your code here
    return array[n];
}

function getFirstElement(array) {
    // your code here
    return array[0];
}

function getLastElement(array) {
    // your code here
    let lastIndex = array.length - 1;
    return array[lastIndex];
}

function addToFront(arr, element) {
    // your code here
    arr.unshift(element);
    return arr;
}

function addToBack(arr, element) {
    // your code here
    arr.push(element);
    return arr;
}

function joinArrays(arr1, arr2) {
    // your code here
    arr3 = arr1.concat(arr2);
    return arr3;
}

function getElementsAfter(array, n) {
    // your code here
    return array.slice(n + 1);
}

function getElementsUpTo(array, n) {
    // your code here
    return array.splice(0, n);
}

function getElementsAfter(array, n) {
  // your code here
  return array.slice(n + 1);
}

function getAllElementsButFirst(array) {
  // your code here
  array.shift();
  return array;
}

function getAllElementsButLast(array) {
  // your code here
  return array.slice(0, array.length - 1);
}

input = [1, 2, 3, 4];
let output = getAllElementsButLast(input);
console.log(output); // --> [1, 2 , 3]

function removeFromFront(arr) {
  // your code here
   arr.shift();
   return arr;
}

function joinThreeArrays(arr1, arr2, arr3) {
  // your code here
  arr4 = arr1.concat(arr2, arr3);
  return arr4;
}

function addToFrontOfNew(arr, element) {
  // your code here
  return [element, ...arr];
}

function addToBackOfNew(arr, element) {
  // your code here
  return [...arr, element];
}

function getAllElementsButNth(array, n) {
  // your code here
  array.splice(n, 1);
  return array;
}

function removeElement(array, discarder) {
  // your code here
  return array.filter(i => i !== discarder);
//   return array;
}

let output2 = removeElement([1, 2, 3, 2, 1], 2);
console.log("output 2: " + output2); // --> [1, 3, 1]

function keep(array, keeper) {
  // your code here
  return array.filter(i => i === keeper);
}

function filterOddLengthWords(words) {
  // your code here
  return words.filter(i => i.length % 2 == 1);
}

function filterEvenLengthWords(words) {
  // your code here
  return words.filter(i => i.length % 2 == 0);
}

function getLengthOfLongestElement(words) {
  // your code here
  if (words.length > 0) {
      let reduced = words.reduce((previous, current) => {
          if (previous.length >= current.length) {
              return previous;
          }
          return current;
      })
      return reduced.length;
  }
  return 0;
}

let output3 = getLengthOfLongestElement(['one', 'two', 'three']);
console.log(output3); // --> 5

function squareElements(arr) {
  // your code here
  return arr.map(x => Math.pow(x,2));
}

function filterOddElements(arr) {
  // your code here
  return arr.filter(x => x % 2 === 1);
}

function computeProductOfAllElements(arr) {
  // your code here
  if (arr.length !== 0) {
      let reduced = arr.reduce((previous, current) => {
          return previous * current
      }, 1);
      return reduced;
  }
  return 0;
}

function joinArrayOfArrays(arr) {
  // your code here
  let result = [];
  for (let i=0; i < arr.length; i++) {
      result.concat(arr[i]);
  }
  return result;
}

var output4 = joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]);
console.log(output4); // --> [1, 4, true, false, 'x', 'y']

function joinArrayOfArrays(arr) {
  // your code here
  return arr.flat();
}

function findShortestWordAmongMixedElements(arr) {
  // your code here
  const strings = arr.filter((item) => typeof item === 'string')
  if (strings.length === 0) {
      return '';
  }

  return strings.reduce((previous, current) => {
      if (previous.length <= current.length)
      {
          return previous;
      }
      return current;
  })
}


function findSmallestNumberAmongMixedElements(arr) {
    // your code here

      const numbers = arr.filter((item) => typeof item === 'number')

      if (numbers.length === 0) {
          return 0;
      }

      return numbers.reduce((previous, current) => {
        if (previous <= current) {
            return previous;
            }
        return current;
            })
}

var output5 = findSmallestNumberAmongMixedElements([4, 'lincoln', 9, 'octopus']);
console.log(output5); // --> 4
