function createObject() {
    // create a result variable,
    let result;
    // assign it to a new object
    result = {};
    // return the result variable
    return result;
  }

  function accessAProperty(object, key) {
    // create a result variable,
    let result;
    // assign it to an expression that accesses the property in the object located at the key
    result = object[key];
    // return the result variable
    return result;
  }

  function reassignAProperty(object, key, newValue) {
    // reassign the property's value in the object, located at the key, to the newValue parameter
    object[key] = newValue;
    // return the input object
    return object;
  }

  function removeAProperty(object, key) {
    // remove the property at the given key from the object
    delete object[key];
    // return the object
    return  object;
  }

  function isPropertyPresent(object, key) {
    // create an isPresent variable
    let isPresent;
    // assign it to a comparison between object's value at key and undefined
    isPresent = object[key] !== undefined;
    // return the isPresent variable
    return isPresent;
  }

  function isAnObject(input) {
    // create an isObject variable
    let isObject;
    // assign it to whether the input is an object type
    isObject = typeof input === "object";
    // create an isNotAnArray variable
    let isNotAnArray;
    // assign it to whether the input is not an array
    isNotAnArray = !Array.isArray(input);
    // create an isObjectAndNotAnArray variable
    let isObjectAndNotAnArray;
    // assign it to a combination of isObject AND isNotAnArray
    isObjectAndNotAnArray = isObject && isNotAnArray;
    // return the isObjectAndNotAnArray variable
    return isObjectAndNotAnArray;
  }

  function getAllKeys(obj) {
    // create a keys variable
    let keys;
    // assign it to an expression which will generate an array of all of the keys in obj
    keys = Object.keys(obj);
    // return to the keys variable
    return keys;
  }

  function getAllValues(obj) {
    // create a values variable
    let values;
    // assign it to an expression which will generate an array of all of the values in obj
    values = Object.values(obj);
    // return to the values variable
    return values;
  }
