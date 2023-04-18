'use strict';

// fetch('http://example.com/movies.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });

// Пример отправки POST запроса:
// async function postData(url = '', data = {}) {
//   // Default options are marked with *
//   const response = await fetch(url, {
//     method: 'POST', // *GET, POST, PUT, DELETE, etc.
//     mode: 'cors', // no-cors, *cors, same-origin
//     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
//     credentials: 'same-origin', // include, *same-origin, omit
//     headers: {
//       'Content-Type': 'application/json'
//       // 'Content-Type': 'application/x-www-form-urlencoded',
//     },
//     redirect: 'follow', // manual, *follow, error
//     referrerPolicy: 'no-referrer', // no-referrer, *client
//     body: JSON.stringify(data) // body data type must match "Content-Type" header
//   });
//   return await response.json(); // parses JSON response into native JavaScript objects
// }

// postData('https://example.com/answer', { answer: 42 })
//   .then((data) => {
//     console.log(data); // JSON data parsed by `response.json()` call
//   });

// ===================  JSONPLACEHOLDER =====================================================

// fetch('https://jsonplaceholder.typicode.com/posts', {
//   method: "POST",
//   body: JSON.stringify({name: 'Vasek'}),
//   headers: {
//     'Content-type': 'application/json'
//   }
// })
// .then(response => response.json())
// .then(json => console.log(json));

//================================= METHOD OF ARRAY =========================================

// filter

// const names = ['Ivan', 'Vasek', 'Olga', 'Anna', 'Voldemar', 'Darmidont'];

// const shortName = names.filter(function(name) {
//   return name.length < 5;
// });
// console.log(shortName);

// const littleName = names.filter(el => el.length > 5);
// console.log(littleName);

// map

// const answers = ['VaSeK', 'AnnA', 'DeNIs', 'JoHN'];

// const lowerCaseAnswer = answers.map(el => el[0].toUpperCase() + el.slice(1).toLowerCase());
// console.log(lowerCaseAnswer);

// every/some

// const some = [4, 'qwq', 'kfhkhiwqwwr'];
// console.log(some.some(el => typeof(el) === 'number')); // true
// console.log(some.every(el => typeof(el) === 'string'));   // false

// reduce 

// const arr = [4, 5, 2, 1, 6, 3];

// const sumArr = arr.reduce((acc, el) => {
//   return acc += el;
// }, 0);

// const sumArr = arr.reduce((acc, el) => acc += el, 0);
// console.log(sumArr);

// const arr = ['apple', 'banana', 'nuts', 'orange', 'pear']
// const longStr = arr.reduce((acc, el) => acc += el, '');
// console.log(longStr);

//============ working with object ====================================================

// const obj = {
//   ivan: 'persone',
//   ann: 'persone',
//   dog: 'animal',
//   cat: 'animal'
// }

// const newArr = Object.entries(obj).filter(name => name[1] === 'persone').map(el => el[0]);
// const per = newArr.filter(name => name[1] === 'person')
// console.log(newArr);

// ==============  TASKS WITH METHOD FOR ARRAY ==============================================

const films = [
  {
      name: 'Titanic',
      rating: 9
  },
  {
      name: 'Die hard 5',
      rating: 5
  },
  {
      name: 'Matrix',
      rating: 8
  },
  {
      name: 'Some bad film',
      rating: 4
  }
];

function showGoodFilms(arr) {
  return arr.filter(film => film.rating >= 8);
}
// console.log(showGoodFilms(films));

function showListOfFilms(arr) {
  // return arr.reduce((acc, film) => acc += `${film.name}, `, '');
  return arr.reduce((acc, curr) =>`${typeof(acc) === 'object' ? acc.name : acc}, ${curr.name}`);
}
// console.log(showListOfFilms(films));

function setFilmsIds(arr) {
  // return arr.map(film => Object.entries(film));
  return arr.map((film, ind) => {
    film.id = ind;
    return film;
  });
}
// console.log(setFilmsIds(films));


const tranformedArray = setFilmsIds(films);

function checkFilms(arr) {
  return arr.every(film => film.id === 0 || film.id)
}

console.log(checkFilms(tranformedArray));

// ================= SECOND PART ================================================

const funds = [
  {amount: -1400},
  {amount: 2400},
  {amount: -1000},
  {amount: 500},
  {amount: 10400},
  {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {

};

const getTotalIncomeAmount = (data) => {

};
