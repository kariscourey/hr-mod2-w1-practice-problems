console.log('main.js is loaded');
import { IMPORTANT_VALUE, logInCaps, Dog } from './import-from-me.js';
// import { notExported, IMPORTANT_VALUE, logInCaps, Dog } from './import-from-me.js';

window.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM content fully loaded and parsed.');

    const url = "https://jservice.xyz/api/random-clue";
    try {
      const response = await fetch (url);
      if (response.ok) {
        const data = await response.json();
        console.log(data);
      } else {
        throw new Error('Response not ok');
      }
    } catch (error) {
      console.error('error', error);
    }
  });


console.log('IMPORTANT_VALUE is', IMPORTANT_VALUE);
logInCaps('This is a message.');

const dog = new Dog('Fido');
const dogWords = dog.speak();
console.log(dogWords);

console.log('main.js is loaded');

// const url = "https://not a valid URL";
// const promisedResponse = fetch(url);
// promisedResponse
//   .catch(error => console.error('error', error));

// const url = "https://jservice.xyz/api/random-clue";
// const promisedResponse = fetch(url);
// promisedResponse
// .then(response => {
//     console.log(response.status);
// })
// .catch(error => console.error('error', error));

// Declare the URL
const url = "https://jservice.xyz/api/random-clue";

// // Get a promise that will be the response
// // when its done
// const promisedResponse = fetch(url);
// promisedResponse
//   .then(response => {
//     // If the response is okay
//     if (response.ok) {
//       // Get a promise that will turn into
//       // the JavaScript value based on the
//       // JSON
//       return response.json();
//     } else {
//       // Throw a new error
//       throw new Error('Response not ok');
//     }
//   })
//   // Print the data that comes from response.json()
//   .then(data => console.log(data))
//   // Handle the error from anywhere in the Promise
//   .catch(error => console.error('error', error));


// try {
//     const response = await fetch (url);
//     if (response.ok) {
//       const data = await response.json();
//       console.log(data);
//     } else {
//       throw new Error('Response not ok');
//     }
//   } catch (error) {
//     console.error('error', error);
//   }
