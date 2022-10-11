function getProperty(obj, key) {
    // your code here
    return obj[key];
  }

function addProperty(obj, key) {
    // your code here
    obj[key] = true;
    return obj;
  }

function addProperty(obj, key) {
  // your code here
  obj[key] = true;
  return obj;
}

function removeProperty(obj, key) {
  // your code here
  delete obj[key];
  return obj;
}

// function addFullNameProperty(obj) {
//   // your code here
//   let fullName;
//   obj[fullName] = obj.firstName + " " + obj.lastName;
//   return obj.fullName;
// }

// person = {
//     firstName: 'Jade',
//     lastName: 'Smith'
//   };
//   addFullNameProperty(person);
//   console.log(person.fullName);

function addFullNameProperty(obj) {
  // your code here
  let fullName;
  obj.fullName = obj.firstName + " " + obj.lastName;
  return obj;
}

function addObjectProperty(obj1, key, obj2) {
  // your code here
  obj1[key] = obj2;
  return obj1;
}

function isPersonOldEnoughToDrive(person) {
  // your code here
  return person.age >= 16;
}

function isPersonOldEnoughToVote(person) {
  // your code here
  return person.age >= 18;
}

function addArrayProperty(obj, key, arr) {
  // your code here
  obj[key] = arr;
  return obj;
}


function removeNumbersLargerThan(num, obj) {
    // your code here
    for (i in obj) {
        if (obj[i] >= num) {
            delete obj[i];
            // NOT delete i;
        }
    }
    return obj;
  }

function removeNumbersLargerThan(num, obj) {
    // your code here
    for (const [key, value] of Objects.entries(obj)) {
        if (typeof value === 'number' && value >= num) {
            delete obj[i];
            // NOT delete i;
        }
    }
    return obj;
}

obj = {
  a: 8,
  b: 2,
  c: 'montana'
}
removeNumbersLargerThan(5, obj);
console.log(obj);

function removeNumbersLessThan(num, obj) {
    // your code here
    for (i in obj) {
        if (obj[i] <= num) {
            delete obj[i];
        }
    }
    return obj;
}

function removeStringValuesLongerThan(num, obj) {
    // your code here
    for (i in obj) {
        if (obj[i].length > num) {
            delete obj[i];
        }
    }
    return obj;
}


function findShortestWordAmongMixedElements(arr) {
  // your code here
  const strings = arr.filter((item) => typeof item === 'string')
  if (strings.length === 0) {
      return '';
  }

  return strings.reduce((previous, current) => {
      if (previous.length <= current.length)
      {
          return previous;
      }
      return current;
  })
}
