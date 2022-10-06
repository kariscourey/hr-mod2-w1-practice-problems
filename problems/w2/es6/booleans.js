function opposite(boolean) {
  // returns the opposite of the inputted boolean value
  return !boolean
}

function eitherAreTrue(bool_1, bool_2) {
  // create a result variable
  let result;
  // assign it to bool_1 OR bool_2
  result = bool_1 || bool_2;
  // return the result variable
  return result;
}

function bothAreTrue(bool_1, bool_2) {
  // create a result variable
  let result;
  // assign it to bool_1 AND bool_2
  result = bool_1 && bool_2;
  // return the result variable
  return result;
}


function combination(bool_1, bool_2, bool_3) {
  // create a result variable
  let result;
  // assign it to bool_1 AND either bool_2 OR bool_3
  result = bool_1 && (bool_2 || bool_3);
  // return the result variable
  return result;
}


function areEqual(param_1, param_2) {
  // create a result variable
  let result;
  // assign it to a comparison between param_1 and param_2 using "equal to" operator
  result = param_1 === param_2;
  // return the result variable
  return result;
}

function areNotEqual(param_1, param_2) {
  // create a result variable
  let result;
  // assign it to a comparison between param_1 and param_2 using "not equal to" operator
  result = param_1 !== param_2;
  // return the result variable
  return result;
}
