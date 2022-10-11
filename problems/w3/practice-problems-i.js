function isOdd(num) {
    return num % 2 == 1;
}

function isEven(num) {
    return num % 2 == 0;
}

function add(num1, num2) {
    return num1 + num2;
}

function subtract(num1, num2) {
    return num1 - num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function divide(num1, num2) {
    return num1 / num2;
}

function intDivide(num1, num2) {
    return Math.floor(num1 / num2);
}

function mean(numbers) {
    if (numbers.length === 0){
        return NaN;
    }
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum / numbers.length;
}

function builtInMax(numbers) {
    return Math.max(...numbers);
}

function builtInMin(numbers) {
    return Math.min(...numbers);
}

function diyMin(numbers) {

    if (numbers.length === 0) {
        return NaN;
    }

    let min = numbers[0];

    for (let i of numbers) {
        if (i <= min) {
            min = i;
        }
    }
    return min;
}

// numbers = [12,3,9,8,1]
// numbers = []
// console.log("min: ")
// console.log(diyMin(numbers))


function diyMax(numbers) {

    if (numbers.length === 0) {
        return NaN;
    }

    let max = numbers[0];

    for (let i of numbers) {
        if (i >= max) {
            max = i;
        }
    }
    return max;
}

function nonEmptyStrings(strings) {
    let results = [];
    for (let i of strings) {
        if (i.length > 0) {
            results.push(i);
        }
    }
    return results;
}

function findStringsLongerThan(strings, minLength) {
    let results = [];
    for (let i of strings) {
        if (i.length > minLength) {
            results.push(i);
        }
    }
    return results;
}

function findStringsWithSubstring(strings, substring) {
    let results = [];
    for (let i of strings) {
        if (i.includes(substring)) {
            results.push(i);
        }
    }
    return results;
}

function mutatingSort(items) {
    return items.sort();
}

function nonmutatingSort(items) {
    let items2 = [...items];
    return items2.sort();
}

function hasProperty(obj, propertyName) {
    return propertyName in obj;
}

function hasPropertyWithValue(obj, propertyName, value) {
    return obj[propertyName] === value;
}

function objectFromArray(array) {
    let result = {};
    if (array.length % 2 === 0) {
        for (let i = 0; i < array.length; i += 2) {
            result[array[i]] = array[i + 1];
        }
    }
    else {
        for (let i = 0; i < array.length - 1; i += 2) {
            result[array[i]] = array[i + 1];
        }
    }
    return result;
}

array = ["a", 1, "b", 2, "c"];
console.log(objectFromArray(array));
console.log(typeof objectFromArray(array));


function objectFromPairs(pairs) {
    let result = {};
    for (let i of pairs) {
        result[i[0]] = i[1];
    }
    return result;
}

// pairs = [["a", 1], ["b", 2]]
// // pairs = []
// console.log(objectFromPairs(pairs))
// console.log(typeof objectFromPairs(pairs))
