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

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');


const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat:false
};

let film = prompt('Один из последних просмотренных фильмов?', '');
let ratingFilm = prompt('На сколько оцените его?', '');
let film1 = prompt('Один из последних просмотренных фильмов?', '');
let ratingFilm1 = prompt('На сколько оцените его?', '');

personalMovieDB['movies'][film] = ratingFilm;
personalMovieDB['movies'][film1] = ratingFilm1;



console.log(personalMovieDB);

//=====================================================================================================

if (4 == 9) {
    console.log('Ok!');
} else {
    console.log('Error');
};

//if (num < 49) {
//    console.log('Error');
//} else if (num > 100) {
//    console.log('Много!');
//} else {
//    console.log('Ok');
//};

//(num === 50) ? console.log('Ok') : console.log('Error');

const num = 51;

switch (num) {
    case 49 : console.log('Мимо!!!');
    break;
    case 50 : console.log('В точку!');
    break;
    case 100 : console.log('Слишком много!');
    break;
    default: console.log('Не в єтот раз!');
}

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

    const hamburger = 103;
    const fries = 3;
    const cola = 0;
    const nuggets = 2;

    console.log(hamburger > 3 && cola > 3 || fries > 2 && nuggets > 1);
    if (hamburger > 3 && cola > 3 || fries > 2 && nuggets > 1) {
        console.log('Ми ситі!');
    } else {
        console.log('Ми уходимо!');
    }

    let johnReport, denReport, maryReport, claudiaReport = 'done';

    if (johnReport || denReport || maryReport || claudiaReport) {
        console.log('Work is done!');
    }

    console.log(johnReport || denReport || maryReport || claudiaReport);

    console.log(NaN || 2  || undefined);
    console.log(NaN && 2  && undefined);
    console.log(1 && 3 && 4);
    console.log(!1 && 2 || !3);
    console.log(25 || null && !3);
    console.log(NaN || null || !4 || undefined || 5);
    console.log(NaN || null && !4 && undefined || 5);
    console.log(5 === 5 && 3 > 1 || 5);