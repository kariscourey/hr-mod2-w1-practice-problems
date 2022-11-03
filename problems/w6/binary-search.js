function binarySearch(numbers, target) {
    let start = 0;
    let end = numbers.length - 1;
    while (start <= end) {
        let half = Math.floor((start + end)/2);
        let value = numbers[half];
        if (target == value) {
            return value;
        } else if (target < value) {
            end = half - 1;
        } else {
            start = half + 1;
        }
    }
    return null
}

it = [3, 5, 13, 21, 34, 55]
targ = 8
console.log(binarySearch(it,targ))
