function createArray() {
    // create a result variable,
    let result;
    // assign it to a new array
    result = [];
    // return the result variable
    return result;
  }

  function accessAnElement(array, index) {
    // create a result variable,
    let result;
    // assign it to an expression that accesses the element within array at the index
    result = array[index];
    // return the result variable
    return result;
  }

  function reassignAnElement(array, index, newValue) {
    // reassign the value in the array, located at the index, to the newValue parameter
    array[index] = newValue;
    // return the input array
    return array;
  }

  function getArrayLength(array) {
    // create a length variable
    let length;
    // assign it to the length of the array
    length = array.length;
    // return the length variable
    return length;
  }

  function getLastElement(array) {
    // create a lastIndex variable
    let lastIndex;
    // assign it to the last index in the array
    lastIndex = array.length - 1;
    // create a lastElement variable
    let lastElement;
    // assign it to the last element in the string (make use of lastIndex)
    lastElement = array[lastIndex];
    // return the lastElement variable
    return lastElement;
  }

  function applyPush(array, element) {
    // add the element to the back of the array
    array.push(element);
    // return the array
    return array;
  }

  function applyPop(array) {
    // create a popped variable
    let pop;
    // assign it to an expression removing the last element from the array
    pop = array.pop()
    // return the popped variable
    return pop;
  }

  function applyUnshift(array, element) {
    // add the element to the front of the array
    array.unshift(element);
    // return the array
    return array;
  }

  function applyShift(array) {
    // create a shifted variable
      let shift;
    // assign it to an expression removing the first element from the array
      shift = array.shift();
    // return the shifted variable
      return shift;
  }


  function addAnElementInGeneral(array, index, element) {
    // add the element to the array at the index given
    // (be sure not to replace any existing elements)
      array.splice(index, 0, element);
    // return the array
      return array;
  }

  function removeAnElementInGeneral(array, index) {
    // remove the element from the array at the index given
    array.splice(index, 1);
    // return the array
    return array;
  }

function applySplice(array, index, item1, item2) {
    // remove two elements from the array at the index given, and adds item1 and item2 in their place
    array.splice(index, 2, item1, item2);
    // return the array
    return array;
  }

  function isAnArray(input) {
    // create a result variable
    let result;
    // assign it to a call to the applicable method
    result = Array.isArray(input);
    // return the result variable
    return result;
  }

  function applySlice(array, start, end) {
    // create a sliceOfArray variable
    let sliceOfArray;
    // assign it to a portion of the array from before start, up to, but not including end
    sliceOfArray = array.slice(start, end);
    // return the sliceOfArray variable
    return sliceOfArray;
  }

  function makeACopy(array) {
    // create a copyOfArray variable
    let copyOfArray;
    // assign it to a copy of the array
    copyOfArray = array.slice()
    // return the copyOfArray variable
    return copyOfArray;
  }

  function applyConcat(array1, array2) {
    // create a concatenatedArray variable
    let concatenatedArray;
    // assign it to the contents of both array1 and array2
    concatenatedArray = array1.concat(array2);
    // return the concatenatedArray variable
    return concatenatedArray;
  }

  function applyJoin(arrayOfStrings, string) {
    // create a joinedString variable
    let joinedString;
    // assign it to a string which is all of the strings in the input array separated by the input string
    joinedString = arrayOfStrings.join(string);
    // return the joinedString variable
    return joinedString;
  }

  function applySplit(stringToBeSplit, splitter) {
    // create a splitString variable
    let splitString;
    // assign it to an array which contains the elements in the stringToBeSplit separated by the splitter
    splitString = stringToBeSplit.split(splitter);
    // return the splitString variable
    return splitString;
  }

  function applyIndexOfToArray(array, element) {
    // create an index variable
    let ind;
    // assign it to the index inside of array where element can be found
    ind = array.indexOf(element);
    // return the index variable
    return ind;
  }
