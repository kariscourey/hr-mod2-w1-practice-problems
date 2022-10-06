function createString() {
    // create a result variable,
    let result;
    // assign it to a new string
    result = "string";
    // return the result variable
    return result;
  }

  function accessACharacter(string, index) {
    // create a result variable,
    let result;
    // assign it to an expression that accesses the character within string at the index
    result = string[index];
    // return the result variable
    return result;
  }

  function reassignAString(string) {
    // reassign input string to described string
    string = "reassigned"
    // return the input string
    return string
  }

  function addTogetherTwoStrings(string1, string2) {
    // create a result variable
    let result;
    // assign it to an expression which adds together string1 and string2
    result = string1 + string2;
    // return the result variable
    return result;
  }

  function createFullName(firstName, lastName) {
    // create a fullName variable
    let fullname;
    // assign it to an expression adding first and last name with a space in between
    fullname = firstName + " " + lastName;
    // return the fullName variable
    return fullname;
  }

  function interpolateAString(activity, dayOfTheWeek) {
    // create a result variable
    let result;
    // assign it to an expression which interpolates the input parameters into the described message
    result = "We will go " + activity + " on " + dayOfTheWeek + ".";
    // return the result variable
    return result;
  }

function getStringLength(string) {
    // create a length variable
    let len;
    // assign it to the length of the string
    len = string.length;
    // return the length variable
    return len;
  }

  function getLastCharacter(string) {
    // create a lastIndex variable
    let lastIndex;
    // assign it to the last index in the string
    lastIndex = string.length - 1;
    // create a lastCharacter variable
    let lastCharacter;
    // assign it to the last character in the string (make use of lastIndex)
    lastCharacter = string[lastIndex];
    // return the lastCharacter variable
    return lastCharacter;
  }

  function applySubString(string, start, end) {
    // create a subString variable
    let subString;
    // assign it to a portion of the string from before start, up to, but not including end
    subString = string.substring(start, end);
    // return the subString variable
    return subString;
  }

  function applyIndexOf(string, subString) {
    // create an index variable
    let index;
    // assign it to the index inside of string where subString can first be found
    index = string.indexOf(subString);
    // return the index variable
    return index;
  }

  function applyToString(param) {
    // create a stringVersion variable
    let stringVersion;
    // assign it to the string version of the input param
    stringVersion = param.toString();
    // return the stringVersion variable
    return stringVersion;
  }

  function generateHaiku(firstLine, secondLine, thirdLine) {
    // create a haiku variable
    let haiku;
    // assign it to an expression involving the input lines, such that they format correct when the return value is logged to the console
    haiku = firstLine + "\n" + secondLine + "\n" + thirdLine;
    // return the haiku variable
    return haiku;
  }
