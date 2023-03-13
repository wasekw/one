'use strict';

a = 15;
console.log(a);

//number = 44;
let number = 5;
const leftBorderWidth = 1;

number = 10;
console.log(number);

//leftBorderWidth = 12;  //mistake

const obj = {
    a: 50,
};

obj.a = 'hahaha';
console.log(obj);

name = 'Alex';  // hosting
var name = 'Vasek';

{
    //let result = 55;
    var result = 22;
}

console.log(result);

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

let COLOR_RED = '#F00';
const _apiBase = 'https://gateway/marvel.443/v1/public/'; // не менять

//=====================================================================================

const max = Number.MAX_SAFE_INTEGER;
// → 9007199254740991

BigInt(Number.MAX_SAFE_INTEGER) + 2n;
// → 9_007_199_254_740_993n

(7 + 6 - 5) * 4 ** 3 / 2 % 3;
// → 1
(7n + 6n - 5n) * 4n ** 3n / 2n % 3n;
// → 1n

BigInt(123);
// → 123n
BigInt(1.5);
// → RangeError
BigInt('1.5');
// → SyntaxError

//===============================================================================