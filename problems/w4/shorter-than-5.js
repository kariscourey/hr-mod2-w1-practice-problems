// Implement the function shorterThan5(strings), which returns an array that contains all of the strings from the strings input that have a length less than 5.

const shorterThan5 = function(strings) {
    const results = [];

    // your code here
    for (let i of strings) {
        if (i.length < 5) {
            results.push(i);
        }
    }

    return results;
};
