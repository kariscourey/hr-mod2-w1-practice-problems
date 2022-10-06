// We're going to complete a function that takes in two number parameters, and returns their sum when added together. Your function should create a variable and assign it to the result of adding the two input parameters together using the + operator, then return that variable. Below is an example of the code running, assuming that you'll have completed the described function: getSum:

// let resultSum = getSum(4, 10);
// console.log('should be 14:', resultSum);

function getSum(num1, num2) {
    // create a result variable,
    let result;
    // assign it to num1 and num2 added together
    result = num1 + num2;
    // return the result variable
    return result;
  }


//   We're going to complete a function that takes in two number parameters (num1, num2), and returns their difference when num2 is subtracted from num1. Your function should create a variable and assign it to the result of subtracting num2 from num1 using the - operator, then return that variable. Below is an example of the code running, assuming that you'll have completed the described function: getDifference.

//   let resultDiff = getDifference(37, 19);
//   console.log('should be 18:', resultDiff);
function getDifference(num1, num2) {
    // create a result variable,
    let result;
    // assign it to num1 minus num2
    result = num1 - num2;
    // return the result variable
    return result;
  }

// We're going to complete a function that takes in two number parameters, and returns their product when multiplied together. Your function should create a variable and assign it to the result of multiplying the number parameters together using the * operator, then return that variable. Below is an example of the code running, assuming that you'll have completed the described function: getProduct:

// let resultProduct = getProduct(9, 4);
// console.log('should be 36:', resultProduct);
function getProduct(num1, num2) {
    // create a result variable,
    let result;
    // assign it to num1 times num2
    result = num1 * num2;
    // return the result variable
    return result;
  }

// We're going to complete a function that takes in two number parameters (num1, num2), and returns the result of num1 divided by num2. Your function should create a variable and assign it to the result of dividing num1 by num2 using the / operator, then return that variable. Below is an example of the code running, assuming that you'll have completed the described function: getQuotient:

// let resultQuotient = getQuotient(20, 4);
// console.log('should be 5:', resultQuotient);

function getQuotient(num1, num2) {
    // create a result variable,
    let result;
    // assign it to num1 divided by num2
    result = num1 / num2;
    // return the result variable
    return result;
  }

// We're going to complete a function that takes in two number parameters (num1, num2), and returns the result of raising num1 to the num2 power. Your function should create a variable and assign it to the result of raising num1 to the num2 power using the ** operator, then return that variable. Below is an example of the code running, assuming that you'll have completed the described function: getPower:

// let resultPower = getPower(3, 4);
// console.log('should be 81:', resultPower);

function getPower(num1, num2) {
    // create a result variable,
    let result;
    // assign it to num1 raised to the num2 power
    result = num1 ** num2;
    // return the result variable
    return result;
  }

function getRemainder(num1, num2) {
    // create a result variable,
    let result;
    // assign it to remainder after dividing num1 by num2
    result = num1 % num2;
    // return the result variable
    return result;
  }

function increment(base, incrementer) {
    // reassign base to result of incrementing base by incrementer
    base += incrementer;
    // return base
    return base;
  }

function decrement(base, decrementer) {
    // reassign base to result of decrementing base by decrementer
    base -= decrementer;
    // return base
    return base;
  }

function applyTimesEquals(base, multiplier) {
    // reassign base to result of multiplying base by multiplier
    base *= multiplier;
    // return base
    return base;
  }

function applyDivideEquals(base, divider) {
    // reassign base to result of dividing base by divider
    base /= divider;
    // return base
    return base;
  }

function getAbsoluteValue(num) {
    // create a result variable
    let result;
    // assign it to absolutely value of input num
    result = Math.abs(num);
    // return result
    return result;
  }

function roundDown(num) {
    // create a result variable
    let result;
    // assign it to input, rounded down
    result = Math.floor(num);
    // return result
    return result;
  }

function roundUp(num) {
    // create a result variable
    let result;
    // assign it to input, rounded up
    result = Math.ceil(num);
    // return result
    return result;
  }


  function applyParseInt(numString) {
    // create a result variable
    let result;
    // assign it to parsed integer from input string
    result = Number.parseInt(numString);
    // return result
    return result;
  }

  function applyParseFloat(numString) {
    // create a result variable
    let result;
    // assign it to parsed float from input string
    result = Number.parseFloat(numString);
    // return result
    return result;
  }

  function generateRandomNumber(min, max) {
    // create a result variable
    let result;
    // assign it to formula for random number between min and max
    result = Math.random() * (max - min) + min;
    // return result
    return result;
  }

  function applyGreaterThan(num1, num2) {
    // create a result variable
    let result;
    // assign it expression comparing if num1 is greater than num2
    result = num1 > num2;
    // return result
    return result;
  }

  function applyLessThanOrEqualTo(num1, num2) {
    // create a result variable
    let result;
    // assign it expression comparing if num1 is less than or equal num2
    result = num1 <= num2;
    // return result
    return result;
  }
