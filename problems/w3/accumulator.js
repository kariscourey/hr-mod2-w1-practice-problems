// your code here
function filterOddElements(lst) {
    if (lst.length == 0) {
        return [];
    }

    let odds = [];

    for (let i = 0; i < lst.length; i++) {
        if (lst[i] % 2 == 1) {
            odds.push(lst[i]);
        }
    }

    return odds;
}


// your code here
function computeSumOfAllElements(lst) {

    let sum = 0;

    if (lst.length == 0) {
        return sum;
    }

    for (let i = 0; i < lst.length; i++) {
        sum += lst[i];
    }

    return sum;
}

// your code here
function computeAverageOfNumbers(lst) {

    if (lst.length == 0) {
        return 0;
    }

    let sum = 0;
    let count = 0;

    for (let i = 0; i < lst.length; i++) {
        sum += lst[i];
        count += 1;
    }

    return sum/count;
}
