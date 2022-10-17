// # JavaScript doesn't have comprehensions like Python, but like many other languages, it has a map function that serves a similar purpose, which is to create a new list that has one item for each item in the input list.

// # Below is the "square" example from problem 2, but in JavaScript using the map function:

// # // with for loop
// # const result = [];
// # for(const number of numbers) {
// #     result.push(number * number);
// # }

// # // with the map function
// # const result = numbers.map(function(number) {
// #     return number * number;
// # });

// # // with the map function and arrow-function notation
// # const result = numbers.map(number => number * number);
// # Implement the function uppercaseAll(strings) in javascript using the map function.

const uppercaseAll2 = function (strings) {
    // use map
    return strings.map(i => i.toUpperCase())
}
