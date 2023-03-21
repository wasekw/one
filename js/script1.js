/* Задание на урок:

1) Создать переменную numberOfFilms и в неё поместить ответ от пользователя на вопрос:
'Сколько фильмов вы уже посмотрели?'

2) Создать объект personalMovieDB и в него поместить такие свойства:
    - count - сюда передается ответ на первый вопрос
    - movies - в это свойство поместить пустой объект
    - actors - тоже поместить пустой объект
    - genres - сюда поместить пустой массив
    - privat - в это свойство поместить boolean(логическое) значение false

3) Задайте пользователю по два раза вопросы:
    - 'Один из последних просмотренных фильмов?'
    - 'На сколько оцените его?'
Ответы стоит поместить в отдельные переменные
Записать ответы в объект movies в формате: 
    movies: {
        'logan': '8.1'
    }

Проверить, чтобы все работало без ошибок в консоли */

'use strict';

// const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


// const personalMovieDB = {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat:false
// };

// let film = prompt('Один из последних просмотренных фильмов?', '');
// let ratingFilm = prompt('На сколько оцените его?', '');
// let film1 = prompt('Один из последних просмотренных фильмов?', '');
// let ratingFilm1 = prompt('На сколько оцените его?', '');

// personalMovieDB['movies'][film] = ratingFilm;
// personalMovieDB['movies'][film1] = ratingFilm1;



// console.log(personalMovieDB);

//=====================================================================================================

// if (4 == 9) {
//     console.log('Ok!');
// } else {
//     console.log('Error');
// }

//if (num < 49) {
//    console.log('Error');
//} else if (num > 100) {
//    console.log('Много!');
//} else {
//    console.log('Ok');
//};

//(num === 50) ? console.log('Ok') : console.log('Error');

// const num = 51;

// switch (num) {
// case 49 : console.log('Мимо!!!');
//     break;
// case 50 : console.log('В точку!');
//     break;
// case 100 : console.log('Слишком много!');
//     break;
// default: console.log('Не в єтот раз!');
// }

//=========================================================================================================

//const hamburger = true;
//const freis = true;

//if (hamburger && freis) {
//    console.log('Я ситий!');
//}

//console.log((hamburger && freis));

//const hamburger = 3;
//const fries = 1;
//const cola = 0;

//console.log(hamburger === 3 && cola && fries);
//if (hamburger === 3 && cola === 1 && fries) {
//    console.log('Ми ситі!');
//} else {
//    console.log('Ми уходимо!');
//}

//console.log(1 && 0);
//console.log(5 && 1);
//console.log(null && 3);
//console.log(1 && 'zhjfhfwwfh');

// const hamburger = 103;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// console.log(hamburger > 3 && cola > 3 || fries > 2 && nuggets > 1);
// if (hamburger > 3 && cola > 3 || fries > 2 && nuggets > 1) {
//     console.log('Ми ситі!');
// } else {
//     console.log('Ми уходимо!');
// }

// let johnReport, denReport, maryReport, claudiaReport = 'done';

// if (johnReport || denReport || maryReport || claudiaReport) {
//     console.log('Work is done!');
// }

// console.log(johnReport || denReport || maryReport || claudiaReport);

// console.log(NaN || 2  || undefined);
// console.log(NaN && 2  && undefined);
// console.log(1 && 3 && 4);
// console.log(!1 && 2 || !3);
// console.log(25 || null && !3);
// console.log(NaN || null || !4 || undefined || 5);
// console.log(NaN || null && !4 && undefined || 5);
// console.log(5 === 5 && 3 > 1 || 5);


// for (let i = 2; i <= 10; i += 2) {
//     console.log(i);
// }

// for (let i = 0; i < 3; i++) {
//     console.log( `number ${i}!` );
// }

// let i = 0;
// while(i < 3) {
//     console.log( `number ${i}!` );
//     i++;
// }

// let result = '';
// do {
//     result = +prompt('Введіть число більше 100', '');
// } while(result <= 100 && result);
// console.log(result);

// let n = 10;

// nextPrime:
// for (let i = 2; i <= n; i++) { // Для всех i...

//     for (let j = 2; j < i; j++) { // проверить, делится ли число..
//         if (i % j == 0) continue nextPrime; // не подходит, берём следующее
//     }

//     console.log( i ); // простое число
// }

// let str = '';
// let number = 7;

// for (let i = 1; i < number; i++) {
//     console.log(str);
//     str += '*';
// }

// for (let i = 1; i < number; i++) {
//     for (let j = 0; j < i; j++) {
//         str += '*';
//     }
//     str += '\n';
// }
// console.log(str);


// first: for (let i = 0; i < 3; i++) {
//     console.log(`First level:${i}`);
//     for (let j = 0; j < 3; j++) {
//         console.log(`Second level:${j}`);
//         for (let k = 0; k < 3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level:${k}`);
//         }
//     }
// }

// 

// let i = 5;
// while(i < 11) {
//     console.log(i);
//     i++;
// }

// for (let i = 20; i >= 10; i--) {
//     if (i === 13) {
//         break;
//     }
//     console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 0) {
//         console.log(i);
//     }
//     continue;
// }

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let i = 2;
// while(i < 15) {
//     i++;
//     if (i % 2 !== 0) {
//         console.log(i);
   
//     } 
// }

// let i = 5;
// let array = [];
// while(i < 11) {
//     array.push(i);
//     i++;
// }
// console.log(array);

// Место для первой задачи
// function firstTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < arr.length; i++) {
//         result.push(arr[i]);  
//     }
    
//     // Не трогаем
//     return result;
// }

// console.log(firstTask());

// Место для второй задачи
// function secondTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         if (typeof(data[i]) === 'string') {
//             data[i] += ' - done';
//         } else if (typeof(data[i]) === 'number') {
//             data[i] *= 2;
//         }
//     }

// data.map(el => {
//     if (typeof(el) === 'string') {
//         return el += ' - done';
//     } else if (typeof(el) === 'number') {
//         return el *= 2;
//     }
// });
    
// Не трогаем
//     return data;
// }

// console.log(secondTask());
// // Место для третьей задачи
// function thirdTask() {
//     // Значения массива менять нельзя, тут он проверяется автоматически именно на эти значения
//     const data = [5, 10, 'Shopping', 20, 'Homework'];
//     const result = [];

//     // Пишем решение вот тут
//     for (let i = 0; i < data.length; i++) {
//         result[data.length - 1 - i] = data[i];
//     }
    
//     // Не трогаем
//     return result;
// }
// console.log(thirdTask());

// const lines = 5;
// let result = '';

// for (let i = 0; i <= lines; i++) {

//     for (let j = 0; j <= lines - i; j++) {
//         result += ' ';
//     }
//     for (let k = 0; k < 2 * i + 1; k++) {
//         result += '*';
//     }
//     result += '\n';
// }
// console.log(result);

//================================================================================================

// const str = 'test';
// const arr = [1, 2, 3];
// console.log(str.length);
// console.log(arr.length);

// console.log(str[2]);
// console.log(str.charAt(2));

// const fruit = 'Some fruit';
// console.log(fruit.indexOf('fruit')); // 5
// console.log(fruit.indexOf('q'));  // -1

// const log = 'Hello world';
// console.log(log.slice(6));
// console.log(log.slice(6, 8));
// console.log(log.substring(6,10));
// console.log(log.substr(6, 3));

// const num = 12.7;
// console.log(Math.round(num));

// const test = '14.6px';
// console.log(parseInt(test, 10));
// console.log(parseFloat(test));

// let billion = 1e9;  // 1 миллиард, буквально: 1 и 9 нулей
// console.log(0xff); // 255
// console.log(0b11111111); // бинарная форма записи числа 255
// console.log(0o377); // восьмеричная форма записи числа 255

// let num = 255;

// console.log(num.toString(16));  // ff
// console.log(num.toString(2));   // 11111111
// console.log(num.toString(5)); //2010
// console.log(12345..toString(36)); // 9ix
// console.log((123456).toString(36)); // 2n9c
// console.log(1e500); // Infinity
// console.log(0.1 + 0.2); // 0.30000000000000004

// let sum = 0.1 + 0.2;
// console.log(sum.toFixed(2)); // 0.30
// console.log(typeof(sum.toFixed(2))); // string

// console.log( isNaN(NaN) ); // true
// console.log( isNaN('str') ); // true

// console.log( isFinite('15') ); // true
// console.log( isFinite('str') ); // false, потому что специальное значение: NaN
// console.log( isFinite(Infinity) ); // false, потому что специальное значение: Infinity

// console.log( NaN === NaN ); // false
// console.log(NaN == NaN); // false

// console.log( typeof(parseInt('100px')) ); // 100 // number
// console.log( parseFloat('12.5em') ); // 12.5

// console.log( parseInt('12.3') ); // 12, вернётся только целая часть
// console.log( parseFloat('12.3.4') ); // 12.3, произойдёт остановка чтения на второй точке

//===================================================================================================

// let oneNumber = +prompt('Введіть просте число від 1 до 100', '');
// let twoNumber = +prompt('Введіть просте число від 1 до 100', '');
// alert(`Ви набрали сумму: ${oneNumber + twoNumber}`);

// function readNumber() {
//     for (let i = 0; i < 1; i++) {

//         let num = +prompt('Введіть просте число.....', '');
//         if (typeof(num) === 'number') {
//             alert(num);
//         } else if (num === '' || num === null) {
//             alert('null');
//         } else {
//             i--;
//         } 
//     }
// }

// readNumber();

/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания