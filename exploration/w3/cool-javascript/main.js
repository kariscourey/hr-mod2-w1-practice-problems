console.log('main.js is loaded');
import { IMPORTANT_VALUE, logInCaps, Dog } from './import-from-me.js';
// import { notExported, IMPORTANT_VALUE, logInCaps, Dog } from './import-from-me.js';

const createTriviaHtml = (category, question, answer) => {
  return `
    <div>
      <h3>${category}</h3>
      <p><b>Question:</b>${question}</p>
      <p><b>Answer:</b>${answer}</p>
    </div>
  `
}

const main = document.querySelector('main');

window.addEventListener('DOMContentLoaded', async () => {
    console.log('DOM content fully loaded and parsed.');

    const url = "https://jservice.xyz/api/random-clue";
    try {
      const response = await fetch (url);
      if (response.ok) {
        const data = await response.json();
        const {question, answer} = data;
        const category = data.category.title;
        const html = createTriviaHtml(category, question, answer);
        main.innerHTML = html;
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
// const url = "https://jservice.xyz/api/random-clue";

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

const createClueButton = document.getElementById('create-clue');
createClueButton.addEventListener('click', async () => {
  const question = document.getElementById('question').value;
  const answer = document.getElementById('answer').value;
  const value = Number.parseInt(document.getElementById('value').value);

  const data = {
    question: question,
    answer: answer,
    value: value,
    categoryId: 1485,
  };

  const url = "https://jservice.xyz/api/clues";
  const fetchOptions = {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    }
  }
  const response = await fetch(url, fetchOptions);
  if (response.ok) {
    const responseData = await response.json();

    const category = responseData.category.title;
    const question = responseData.question;
    const answer = responseData.answer;
    const html = createTriviaHtml(category, question, answer);

    const newClueTag = document.getElementById('new-clue');
    newClueTag.innerHTML = html;

  }
});
