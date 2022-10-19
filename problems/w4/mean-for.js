// Implement the function mean(numbers), as described at the top, in JavaScript with a for loop.

function mean(numbers) {

    let sum = 0;
    let count = 0;

    for (let i of numbers) {
        sum += i;
        count++;
    }

    return sum/count; // replace with your code
}
