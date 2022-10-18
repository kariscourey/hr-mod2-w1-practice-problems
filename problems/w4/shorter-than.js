// The function above has the maxLength hard coded as 5. Let's make this function a little more flexible and pass the maxLength in as a function parameter.

// Implement the JavaScript function shorterThan(strings, maxLength)

// You should be able to use your solution from above with just one change.

const shorterThan = function(strings, maxLength) {
    const results = [];

    // your code here
    for (let i of strings) {
        if (i.length < maxLength) {
            results.push(i);
        }
    }

    return results;
};
