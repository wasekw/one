'use strict';

// a = 15;
// console.log(a);

//number = 44;
// let number = 5;
// const leftBorderWidth = 1;

// number = 10;
// console.log(number);

//leftBorderWidth = 12;  //mistake

// const obj = {
//     a: 50,
// };

// obj.a = 'hahaha';
// console.log(obj);

// name = 'Alex';  // hosting
// var name = 'Vasek';

// {
//     //let result = 55;
//     var result = 22;
// }

// console.log(result);

//alert(22)
//[].push(12)

//==========================================================================================================

const a = 5000;
const b = 4000;

console.log('Ширина кузова автомобиля: ' + a + ', a висота кузова автомобиля: ' + b);

const carBodyWidth =  5000;
const carBodyLength = 4000;

console.log('Ширина кузова автомобиля: ' + carBodyWidth + ', a висота кузова автомобиля: ' + carBodyLength);

// Request
// data
// response

//camelCase
//snake_case
//UPPER_SNAKE_CASE 
// Kebab-case 
// PascalCase

// let COLOR_RED = '#F00';
// const _apiBase = 'https://gateway/marvel.443/v1/public/'; // не менять

//=====================================================================================

// const max = Number.MAX_SAFE_INTEGER;
// // → 9007199254740991

// BigInt(Number.MAX_SAFE_INTEGER) + 2n;
// // → 9_007_199_254_740_993n

// (7 + 6 - 5) * 4 ** 3 / 2 % 3;
// // → 1
// (7n + 6n - 5n) * 4n ** 3n / 2n % 3n;
// // → 1n

// BigInt(123);
// // → 123n
// BigInt(1.5);
// // → RangeError
// BigInt('1.5');
// // → SyntaxError

//===============================================================================

// let number = 9.887;
// console.log(4 / 0);  // Infinity
// console.log(-3 / 0); // -Infinity
// console.log('first' * 2); // NaN

// let und;
// console.log(und); // undefined
// console.log(first);  // ReferenceError: first is not defined

const person = {
    name: 'Lida',
    age: 33,
    isMerried: false,
};

// console.log(person.name);  // Lida
// console.log(person[name]);  // ReferenceError: name is not defined
console.log(person['name']);  // Lida


// const arr = ['plum.jpg', 6, 'orange.bmp', [2, 55], 'apple.png', {a: 'string', v: 'zero'}];
// console.log(arr[3][1]);  // 55
// console.log(typeof(arr)); // object

//=========================================================================================================
// const arr1 = [1, 2, 3];
// arr1[10] = 333;

// console.log(arr1); // [ 1, 2, 3, <7 empty items>, 333 ]
// const arrObj = {'0': 1, '1': 2, '2': 3};

// console.log(arr1[1]);
// console.log(arrObj[0]);

// arrObj.b = true;

// console.log(arrObj.b); // true
// //console.log(arrObj[b]); //  ReferenceError: b is not defined  // const b = 'b'; то не буде помилки.
// console.log(arrObj['b']);
// //const obj = {a: 1, b: 2};

// const obj = {
//     'Anna': 300,
//     'Danial': 333
// };

//===========================================================================================

// alert('Hello!');

// const result = confirm('Are you living in Ukraine?');
// console.log(result); // Якщо нажав кнопку ОК то вертає true. 
// Якщо нажав кнопку Отмена то вертає false

// const result = prompt('What is your name?', '');
// console.log(result); // В строку для ввода ввели Vasek то в result отримаємо Vasek.
// Якщо відміна то отримуєм null
// Завжди отримуэм тип донних строка string

// document.write('Hi a deleted All on your page!');
const answers = [];

// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('What is your surname?', '');
// answers[2] = prompt('How old are you?', '');

console.log(typeof(answers));  // object
console.log(typeof(null)); // object

//================================================================================================================

// const category = 'toys';

// console.log('https://someurl.com/' + category); // https://someurl.com/toys
// console.log(`https://someurl.com/${category}`); // https://someurl.com/toys

// const user = 'Vasek';
// alert(`Hello ${user}`);

//=============================================================================================================

console.log('arr' + ' - object');  // arr - object
console.log('arr' + +'- object'); // arrNaN
console.log(4 + +'5'); // 9
console.log(4 + +' - object');  // NaN

let incr = 10;
let decr = 10;

incr++;
decr--;

console.log(incr); // 11
console.log(decr); // 9

console.log(5 % 2); // 1
console.log(4 * 2 == 8); // true
console.log(4 * 2 == '8'); // true
console.log(4 * 2 === '8'); // false 

const isChecked = true;
const isClosed = false;

console.log(isChecked && isClosed); // false
console.log(isChecked || isClosed); // true

//=============================================================================================================================

// git log --pretty=oneline
// git log --pretty=oneline --max-count=2
// git log --pretty=oneline --since='5 minutes ago'
// git log --pretty=oneline --until='5 minutes ago'
// git log --pretty=oneline --author=<your name>
// git log --pretty=oneline --all
// git log --pretty=format:"%h %ad | %s%d [%an]" --graph --date=short
// git config --global alias.hist "log --pretty=format:'%h %ad | %s%d [%an]' --graph --date=short"
// git config --global alias.type 'cat-file -t'
// git config --global alias.dump 'cat-file -p'
// git tag v1

//======================================================================================================

// git remote add origin <адрес репозитория на github> добавляем новий проект в репозиторий на гитхабе
// git branch -M main - переименовиваем ветку мастер на мейн master -->  main
// git push -u origin main - отправляем свой новий проект на гитхаб

//=========================================================================================================

//GET / HTTP/1.1
//Host: developer.mozilla.org
//Accept-Language: fr

//Читает ответ от сервера:
//HTTP/1.1 200 OK
//Date: Sat, 09 Oct 2010 14:28:02 GMT
//Server: Apache
//Last-Modified: Tue, 01 Dec 2009 20:18:22 GMT
//ETag: "51142bc1-7449-479b075b2891b"
//Accept-Ranges: bytes
//Content-Length: 29769
//Content-Type: text/html

//<!DOCTYPE html... (here comes the 29769 bytes of the requested web page)