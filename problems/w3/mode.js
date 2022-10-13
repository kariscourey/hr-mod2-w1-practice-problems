// The mode average is the number that occurs most often in a list of numbers. For example, the mode average in the following list is 4:

// [1, 4, 10, 2, 8, 4, 6, 4]

// Please complete the mode function to find the mode average of an array of numbers. The array will never be empty. There will only be one modal value.

function mode(numbers) {
    let dct = {};

    for (let i of numbers) {
        if (i in dct) {
            dct[i]++;
        }
        else {
            dct[i] = 1;
        }
    }

    let max = 0;

    for (let i in dct) {
        if (dct[i] > max) {
            max = i;
        }
    }
    return max;

}

values = [1, 4, 10, 2, 8, 4, 6, 4];
console.log(mode(values));


function mode(numbers) {
    const count = {};
    for (let n of numbers){
        if (count[n]) {
            count[n] += 1;
        } else {
            count[n] = 1;
        }
    } return Object.keys(count).reduce((a, b) => count[a] > count[b] ? a: b);
}


function mode(numbers) {
    let counter = {};

    for (let i of numbers) {
        if (i in counter) {
            counter[i]++;
        }
        else {
            counter[i] = 1;
        }
    }

    let numMode = Object.values(counter);
    numMode = Math.max(...numMode);

    for (const c in counter) {
        if (counter[c] === numMode) {
            return c;
        }
    }
    return max;

}
