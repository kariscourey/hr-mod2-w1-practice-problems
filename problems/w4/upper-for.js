// Implement the function uppercaseAll(strings) in JavaScript using a for ... of loop.

const uppercaseAll = function (strings) {
    const result = [];

    // your for...of loop here
    for (let i of strings) {
        result.push(i.toUpperCase())
    }

    return result;
}
