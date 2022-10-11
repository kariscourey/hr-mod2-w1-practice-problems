function getIndexOf(char, str) {
  // your code here
  for (let i = 0; i < str.length; i++) {
      if (str[i] == char) {
          return i;
      }
  }
  return -1;
}

function computeFactorialOfN(n) {
  // your code here
  let result = 1;
  for (let i=1; i <= n; i++) {
      result *= i;
  }
  return result;
}

function repeatString(string, num) {
  // your code here
  return string.repeat(num);
}

let output = repeatString('code', 3);
console.log(output); // --> 'codecodecode'


function getStringLength(s) {
  // your code here
  let len = 0;
//   while (s) {
//     s = s.substring(0)

//   }
//   for (let i=0; i < s.length; i++) {
//       len++;
//   }
//   return len;

    s = s.substring(1);
    s = s.substring(1);
    s = s.substring(1);
    s = s.substring(1);
    // s = s.substring(1);
    // s = s.substring(1);
    return s === "";
}

function getStringLength(s) {
    // your code here
    let len = 0;
    while (s) {
      s = s.substring(1);
      len++;
    }
    return len;
}

let outputs = getStringLength('hello');
console.log(outputs); // --> 5
