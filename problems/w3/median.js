// # The median average is the value that occurs in the middle of a sorted list of numbers. For example, given this list:

// # [1, 10, 2, 8, 4]

// # its median average is 4 because, once its sorted, 4 is the middle value.

// # If you have an even number of items in the list, you find the middle two, then take the mean average of those. For example, if you have this list:

// # [1, 10, 2, 8, 4, 6]

// # its median average is 5, which is the mean average of 4 and 6.

// # Please complete the median function below to calculate the median average of an array of numbers. The list will never be empty.

function median(numbers) {

    numbers.sort((a,b)=>a-b);
    console.log(numbers);

    const half = Math.floor(numbers.length/2)

    if (numbers.length % 2 == 0) {
        return ((numbers[half - 1] + numbers[half]) / 2);
    }
    return numbers[half];
}

// values = [1, 10, 2, 8, 4]
values = [1, 2, 3.5, 8, 10]
console.log(median(values))

values = [1, 10, 2, 8, 4, 6]
values = [1, 2, 3.5, 6, 8, 10]
console.log(median(values))

// values = [1, 10, 2, 8, 4, 6, 12, 24]
// console.log(median(values))


function median(numbers) {
    let median = null;
    let mid = Math.floor(numbers.length) / 2;

    const sorted = numbers.sort((a,b)=>a-b);

    if (numbers.length % 2 == 0) {
        return (numbers[mid-1] + numbers[mid]) / 2;
    }
    return numbers[mid];

}


function median(numbers) {
    numbers.sort(function(a, b){return a - b});
    if (numbers.length%2 ===1){
        return numbers[Math.floor(numbers.length/2)];
        }
    return (numbers[Math.floor(numbers.length/2)-1] +
    numbers[Math.floor(numbers.length/2)])/2;
}


function median(numbers) {
    let length = numbers.length
    numbers.sort((a, b) => a - b)
    if (length % 2 === 1) {
        return numbers[Math.floor(length / 2)]
    } else {
        let first = numbers[length/2 - 1]
        let second = numbers[length/2]
        let average = (first + second) / 2
        return average
    }
}

function median(numbers) {
    const mid = Math.floor(numbers.length / 2);
    const nums = [...numbers].sort((a, b) => a - b);
    return numbers.length % 2 !== 0 ? nums[mid] : (nums[mid -1] + nums[mid]) / 2;

};
