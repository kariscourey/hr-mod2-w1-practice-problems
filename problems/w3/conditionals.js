function isOldEnoughToDrink(age) {
  // your code here
  return age >= 21;
}

function isOldEnoughToDrive(age) {
  // your code here
  return age >= 16;
}

function isOldEnoughToVote(age) {
  // your code here
  return age >= 18;
}

function isOldEnoughToDrinkAndDrive(age) {
  // your code here
  return false;
}

function checkAge(name, age) {
  // your code here
  if (age >= 21) {
      return `Welcome, ${name}!`;
  }
  return `Go home, ${name}!`;
}
