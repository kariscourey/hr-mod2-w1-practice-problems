function countWords(stringOfWords) {
    // your code here
    if (stringOfWords.length == 0) {
        return {};
    }

    let counts = {};

    for (let i = 0; i < stringOfWords.length; i++) {
        if (stringOfWords[i] in counts) {
            counts[i]++;
        }
        else {
            counts[i] = 1;
        }
    }
    return counts;
  }


function countWords(stringOfWords) {
    // your code here
    if (stringOfWords.length == 0) {
        return {};
    }

    let counts = {};
    let arrayOfWords = stringOfWords.split(" ");

    for (let i = 0; i < arrayOfWords.length; i++) {

        let currentElement = arrayOfWords[i];

        if (counts[currentElement] === undefined) {
            counts[currentElement] = 1;
        }
        else {
            counts[currentElement]++;
        }
    }
    return counts;
  }

  function countAllCharacters(string) {
    // your code here
    if (string.length == 0) {
        return {};
    }

    let counts = {};

    for (let i = 0; i < string.length; i++) {

        let currentElement = string[i];

        if (counts[currentElement] === undefined) {
            counts[currentElement] = 1;
        }
        else {
            counts[currentElement]++;
        }
    }
    return counts;
  }
