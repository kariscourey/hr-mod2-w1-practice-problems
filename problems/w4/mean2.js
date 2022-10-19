// Implement mean2(numbers) in JavaScript using the reduce function.

function mean2(numbers) {
    // const sum = numbers.reduce(
    //     (previous, current) =>
    //         previous + current, 0
    //     )
    // const mean = sum / numbers.length
    // return mean; // replace with your code

    return numbers.reduce((sum, n) => sum + n) / numbers.length;
}
