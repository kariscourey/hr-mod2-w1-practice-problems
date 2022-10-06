function applyUnshiftAgain(arrayOfArrays, index, element) {
    // add the element to the front of the inner array within the array of arrays located at the index
      arrayOfArrays[index].unshift(element);
    // return the array of arrays
    return arrayOfArrays;
  }

  function isAnArrayAgain(inputObj, key) {
    // create a result variable
    let result;
    // assign it to a call to the applicable method
    result = Array.isArray(inputObj[key]);
    // return the result variable
    return result;
  }

  function getAllKeysAgain(obj, key) {
    // create a keys variable
    let keys;
    // assign it to an expression which will generate an array of all of the keys located within obj at key
    keys = Object.keys(obj[key]);
    // return to the keys variable
    return keys;
  }

  function removeAPropertyAgain(arrayOfObjects, index, key) {
    // remove the property at the given key from the object at the given index
    delete arrayOfObjects[index][key];
    // return the input array of objects
    return arrayOfObjects;
  }
