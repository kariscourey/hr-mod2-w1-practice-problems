function fizzbuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return "fizzbuzz";
    }
    else if (num % 3 === 0) {
        return "fizz";
    }
    else if (num % 5 === 0) {
        return "buzz";
    }
    else {
        return num;
    }
}

function inBounds(x, y) {
    return (x >= 0 && y >= 0 && x <= 10 && y <= 10);
}

function inRectangle(x, y, rect) {
    let x_check = (x >= rect.left && x <= rect.left + rect.width);
    let y_check = (y >= rect.bottom && y <= rect.bottom + rect.height);
    return x_check && y_check;
}

function reverse(array) {
    return [...array].reverse();
}

function hasQuorum(attendees, members) {
    return attendees.length >= 0.5 * members.length;
}

// console.log(calculateLetterGrade(scores))

function calculateLetterGrade(scores) {
    let sum = scores.reduce((partSum, a) => partSum + a, 0);
    let avg = sum / scores.length;

    if (avg >= 90) {
        return "A";
    }
    else if (avg >= 80) {
        return "B";
    }
    else if (avg >= 70) {
        return "C";
    }
    else if (avg >= 60) {
        return "D";
    }
    else {
        return "F";
    }
}

// scores = [70, 60]
// console.log(calculateLetterGrade(scores))

function findSecondLargest(values) {
    let max = values[0];
    let second = max;

    for (let i of values) {
        if (i > max) {
            second = max;
            max = i;
        }
        if (i > second && i < max) {
            second = i;
        }
    }
    return second;
}

values = [2,7,4,4,6]
console.log(findSecondLargest(values))

function sumUpTo(value) {
    let result = 0;
    for (let i=0; i<=value; i++) {
        result += i;
    }
    return result;
}

function extend(obj1, obj2) {
    // your code here
    for (let i in obj2) {
        if (!obj1.hasOwnProperty(i)) {
            obj1[i] = obj2[i];
        }
    }
    return obj1;
  }
