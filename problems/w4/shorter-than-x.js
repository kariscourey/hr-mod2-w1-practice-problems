As we saw yesterday, JavaScript does not have list comprehensions like Python, but it does have an Array method called filter, which works like the if in the Python list comprehension. Here we'll duplicate the filter examples from the previous question, but with the JavaScript filter method.

// Here's an example that selects all of the numbers from a list that are greater than 4.

// numbers = [1,2,3,4,5,6,7,8]

// greaterThan4 = numbers.filter(function(number) { return number > 4; });

// console.log(greaterThan4)  # --> [5,6,7,8]
// This example will select all of the strings that represent a number:

// strings = ["cat", "1", "a", "5.3"]

// numberStrings = strings.filter(function(string) {
//     return ! isNaN(parseFloat(string));
// });

// console.log(numberStrings)  # --> ["1", "5.3"]
// Implement the function shorterThanX(strings, maxLength) in JavaScript using the filter function.

const shorterThanX = function(strings, maxLength) {
    // your code here
    return strings.filter(function(string) {
        return string.length < maxLength;
    })
};
