// var select = document.querySelector('select');
// var list = document.querySelector('ul');
// var h1 = document.querySelector('h1');

// select.onchange = function() {
//   var choice = select.value;

//   // ДОБАВЬТЕ СЮДА УСЛОВНОЕ ВЫРАЖЕНИЕ
// if(choice === 'Январь' || choice === 'Март' || choice === 'Май' || choice === 'Июль' || choice === 'Август' || choice === 'Октябрь' || choice === 'Декабрь') {
// days = 31;
// } else if(choice === 'Февраль') {
// days = 28;
// } else {
// days = 30;
// }
//   createCalendar(days, choice);
// }

// function createCalendar(days, choice) {
//   list.innerHTML = '';
//   h1.textContent = choice;
//   for (var i = 1; i <= days; i++) {
//     var listItem = document.createElement('li');
//     listItem.textContent = i;
//     list.appendChild(listItem);
//    }
// }

// createCalendar(31,'Январь');

// var select = document.querySelector('select');
// var html = document.querySelector('.output');

// select.onchange = function() {
//   var choice = select.value;

//   // ДОБАВЬТЕ ИНСТРУКЦИЮ SWITCH
// 	switch(choice) {
// 	case 'Черная': update('black', 'white');
// 	break;
// 	case 'Белая': update('white', 'black');
// 	break;
// 	case 'Желтая': update('green', 'blue');
// 	break;
// 	case 'Лиловая': update('blue', 'green');
// 	break;
// 	default: update('#737373', '#345345');
// }

//   function update(bgColor, textColor) {
//     html.style.backgroundColor = bgColor;
//     html.style.color = textColor;
//   }
// }

//====================================================================================================

// Место для первой задачи
// function calculateVolumeAndArea(side) {
//     if (typeof(side) !== 'number' || side < 0 || side != Math.floor(side)) {
//         return 'При вычислении произошла ошибка';
//     }
//     let volume = side * side * side;
//     let area = side * side * 6;
//     return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
// }


// // Место для второй задачи
// function getCoupeNumber(num) {
//     if (typeof (num) !== 'number' || num < 0 || !Number.isInteger(num)) {
//         return 'Ошибка. Проверьте правильность введенного номера места';
//     }

//     if (num === 0 || num > 36) {
//         return 'Таких мест в вагоне не существует';
//     }

//     return Math.ceil(num / 4);
// }

//=================================================================================================

// Место для первой задачи
// function getTimeFromMinutes(minute) {
//     let hour = Math.floor(minute / 60);
//     if (typeof(minute) != 'number' || minute != Math.floor(minute) || minute < 0) {
//         return 'Ошибка, проверьте данные';
//     } else if (minute == 0) {
//         return 'Это 0 часов и 0 минут';
//     } else if (hour == 0 || hour == 5 || hour == 6 || hour == 7 || hour == 8 || hour == 9) {
//         return `Это ${hour} часов и ${minute % 60} минут"`;
//     } else if (hour == 1) {
//         return `Это ${hour} час и ${minute % 60} минут`;
//     } else {
//         return `Это ${hour} часа и ${minute % 60} минут`;
//     }
// } 

// console.log(getTimeFromMinutes(-150));
// console.log(getTimeFromMinutes(0));
// console.log(getTimeFromMinutes(150));
// console.log(getTimeFromMinutes(50));


// // Место для второй задачи
// function findMaxNumber(...args) {
//     // let maxNumber = args[0];

//     for (let i = 0; i < args.length; i++) {
       
//         if (args.length < 4 || typeof(args[i]) !== 'number') {
//             return 0;
//         // } else if (args[i] > maxNumber) {
//         //     maxNumber = args[i];
//         } 
//     }
//     // return maxNumber;
//     return Math.max(...args);
// }

// console.log(findMaxNumber(1, 5, 6.6, 11));

//=================================================================================================

// function fib(num) {
    
//     let firstNum = 0;
//     let secondNum = 1;
//     let answerStr = `${firstNum} ${secondNum} `;
    
//     if (num == 0 || typeof(num) !== 'number' || !Number.isInteger(num)) {
//         return '';
//     }  else if (num == 1) {
//         return '0';
//     }
    
//     for (let i = 2; i < num; i++) {
//         secondNum = firstNum + secondNum;
//         firstNum = secondNum - firstNum;
//         if (i != num -1) {
//             answerStr += `${secondNum} `;
//         } else {
//             answerStr += `${secondNum}`;
//         } 
//     }
//     return answerStr;
// }

// console.log(fib(22));

//==================================================================================================

//function first() {
//    //Do something.....
//    setTimeout(function() {
//        console.log(1);
//    }, 500);
//}

//function second() {
//    console.log(2);
//}

//first();
//second();

//function learnJS(lang, callback) {
//    console.log(`Я учу ${lang}`);
//    callback();
//}

//function done() {
//    console.log('Я прошел этот урок');
//}

//learnJS('JavaScript', done);

//=====================================================================================================

//const obj = new Object();

//const options = {
//    name: 'test',
//    width: 1024,
//    height: 1024,
//    colors: {
//        border: 'green',
//        bg: 'red'
//    },
//    makeTest: function() {
//        console.log('Test');
//    }
//}

//const {border, bg} = options.colors;

//console.log(border);

//options.makeTest();
//console.log(Object.keys(options).length);
//console.log(options.colors.bg);
//console.log(options['colors']['border']);

//delete options.name;

//let counter = 0;
//for (let key in options) {
//    if (typeof(options[key]) !== 'object') {
//        console.log(`Свойство ${key} имеет значение ${options[key]}`);
//        counter++;
//    } else {
//        for (let i in options[key]) {
//            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//            counter++;
//            }
//    }
//}
//console.log(counter);
   
//====================================================================================================

// const arr = [1, 2, 3, 5, 8, 12];
//arr.push(17, 5);
//arr.pop();
//console.log(arr);

//for (let i= 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

//for (let el of arr) {
//    console.log(el);
//}

// arr.forEach(function(el, index, array) {
//     console.log(`${index}: ${el} внутри массива ${array}`);
// });

//===================================================================================================

// let obj = {
//     a: 1,
//     b: 2,
// };
// let objCopy = Object.assign({}, obj);
  
// console.log(objCopy); // результат - { a: 1, b: 2 }
// objCopy.b = 89;
// console.log(objCopy); // результат - { a: 1, b: 89 }
// console.log(obj); // результат - { a: 1, b: 2 }

// Object.assign делает только поверхностную копию. 

// let obj = { 
//     a: 1,
//     b: { 
//       c: 2,
//     },
//   }
  
//   let newObj = JSON.parse(JSON.stringify(obj));
  
//   obj.b.c = 20;
//   console.log(obj); // { a: 1, b: { c: 20 } }
//   console.log(newObj); // { a: 1, b: { c: 2 } } (Новый нетронутый объект!)

// const array = [
//     'a',
//     'c',
//     'd', {
//         four: 4
//     },
// ];
// const newArray = [...array];
// console.log(newArray);
// Result 
// ["a", "c", "d", { four: 4 }]

// let obj = {
//     one: 1,
//     two: 2,
//   }
  
//   let newObj = { ...obj };

// var parts = ['shoulders', 'knees'];
// var lyrics = ['head', ...parts, 'and', 'toes'];
// console.log(lyrics); // ["head", "shoulders", "knees", "and", "toes"]

//=======================================================================================

// let a = 5;
// let b = a;
// b = b + 5;
// console.log(a); // 5
// console.log(b); // 10

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;

// copy.a = 10;

// console.log(obj); // { a: 10, b: 1 }
// console.log(copy); //{ a: 10, b: 1 }

//
// function copy(mainObj) {
//     let objCopy = {};

//     for (let key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }
//     return objCopy;
// }

// const mainObj = {
//     name: 'Bob',
//     age: 33,
//     isMarried: false
// };

// copy(mainObj);

// mainObj.name = 'Vasek';

// console.log(mainObj);
// console.log(objCopy);

// const number ={
//     a: 3, 
//     b: 77,
//     c: {
//         d: 11,
//         e: 33
//     }
// };

// const copyObj = copy(number);

// number.c.d = 22;
// number.b = 55;
// console.log(number);
// console.log(copyObj);

// const add = {
//     f: 44,
//     t: 14
// };

// const sumObj = Object.assign({}, number, add);
// console.log(sumObj);

// const oldArray = ['a', 'b', 'c', ['ff']];
// const newArray = oldArray.slice();
// newArray[3][0] = 'pop';
// newArray[2] = 'hahahahah';
// console.logblogs(oldArray); // [ 'a', 'b', 'c', [ 'pop' ] ]
// console.log(newArray); // [ 'a', 'b', 'hahahahah', [ 'pop' ] ]

// const vidio = ['youtube', 'vimio', 'rutube'];
// const blogs = ['facebook', 'tweeter', 'viber', 'zoom'];
// const social =[...vidio, ...blogs, 'pipe', 'whatsup'];
// console.log(social);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [3, 7, 19];

// log(...num);

// const men = {
//     name: 'Piter',
//     age: 45,
//     address: {
//         country: 'Ukraine',
//         town: 'Kropivnitsky',
//         street: 'Zurliva'
//     },
//     isMarried: true,
//     sayName: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// };

// const menCopy = {...men};
// menCopy.name = 'VAsek';
// menCopy.address.town = 'Kiev';
// console.log(menCopy);
// console.log(men);

// menCopy.sayName();
// men.sayName();

//====================================================================================================

// const personalPlanPeter = {
//     name: 'Peter',
//     age: '29',
//     skills: {
//         languages: ['ru', 'eng'],
//         programmingLangs: {
//             js: '20%',
//             php: '10%'
//         },
//         exp: '1 month'
//     },
//     showAgeAndLangs: function(plan) {
//         // return `Мне ${this.age} и я владею языками: ${this.skills.languages.map(el => el.toUpperCase())}`;
//         const {age} = plan;
//         const {languages} = plan.skills;
//         let answer = `Мне ${age} и я владею языками: `;
        
//         languages.forEach(el => {
//             answer += `${el.toUpperCase()} `;
//         });
//         return answer;
//     }
// };

// function showExperience(plan) {
// return plan.skills.exp;
//     const {skills: {exp: expirience}} = plan;
//     return expirience;
// }

// console.log(showExperience(personalPlanPeter));

// function showProgrammingLangs(plan) {
//     let answer = '';
//     const {programmingLangs: lang} = plan.skills;
//     for (let key in lang) {
//         answer += `Язык ${key} изучен на ${lang[key]}\n`;
//     }
//     return answer.trim();
// }

// // console.log(personalPlanPeter.showAgeAndLangs(personalPlanPeter));
// console.log(showProgrammingLangs(personalPlanPeter));  

//===============================================================================================================

// const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     let str = 'Семья состоит из: ';
//     if (arr.length === 0) {
//         return 'Семья пуста';
//     } else {
//         arr.forEach(el => {
//             str += `${el} `;
//         }); 
//     }
//     return str;
// }

// console.log(showFamily(family));

// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {
//     // let str = '';
//     // arr.map(el => {
//     //     str += `${el.toLowerCase()}\n`;
//     // });
//     // return str;

//     arr.forEach(city => {
//         console.log(city.toLowerCase());
//     });
// }

// standardizeStrings(favoriteCities);

//======================================================================================================================

// const someString = 'This is some strange string';

// function reverse(str) {
//     if (typeof(str) !== 'string') {
//         return "Ошибка!";

//     return str.split('').reverse().join('');
// }

// console.log(reverse(someString)) ;

// const baseCurrencies = ['USD', 'EUR'];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
// const arrAllCurrencies = [...baseCurrencies, ...additionalCurrencies];

// function availableCurr(arr, missingCurr) {
//     let str = (arr.length === 0) ? 'Нет доступных валют' : 'Доступные валюты:\n';
//     arr.filter(el => el !== missingCurr).forEach(el => {
//             str += `${el}\n`;
//         });
//     return str;
// }

// console.log(availableCurr(arrAllCurrencies));

//===========================================================================================================================

// let str = 'some';
// const newObj = new String(str);
// console.log(newObj);
// console.log(typeof(str));
// console.log(typeof(newObj));

// const soldge = {
//     healse: 400,
//     armor: 100,
//     sayHello: function() {
//         console.log('Hello');
//     }
// };

// const john = Object.create(soldge);
// john.healse = 100;

// // john.__proto__ = soldge;
// // Object.setPrototypeOf(john, soldge);

// console.log(john.armor);
// john.sayHello();
// console.log(john);

//======================================================================================================

// const shoppingMallData = {
//     shops: [
//         {
//             width: 10,
//             length: 5
//         },
//         {
//             width: 15,
//             length: 7
//         },
//         {
//             width: 20,
//             length: 5
//         },
//         {
//             width: 8,
//             length: 10
//         }
//     ],
//     height: 5,
//     moneyPer1m3: 30,
//     budget: 50000
// };

// function isBudgetEnough(data) {
//     const {shops, height, moneyPer1m3, budget} = data;
//     const sqwera = shops.map(el => el.width * el.length).reduce((acc, el) => acc += el, 0);
//     const price = sqwera * height * moneyPer1m3;
//     if (price > budget) {
//         console.log('Бюджета недостаточно');
//     } else {
//         console.log('Бюджета достаточно');
//     }
// }

// isBudgetEnough(shoppingMallData);

//====================================================================================================

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

// function sortStudentsByGroups(arr) {

//     arr.sort(); 
//     const firstArr = [];
//     const secondArr = [];
//     const thirdArr = [];
//     const rest = [];


//     for (let i = 0; i < arr.length; i++) {
//         if (i < 3) {
//             firstArr.push(arr[i]);
//         } else if (i < 6) {
//             secondArr.push(arr[i]);
//         } else if (i < 9) {
//             thirdArr.push(arr[i]);
//         } else {
//             rest.push(arr[i]);
//         }
//     }

//     return [firstArr, secondArr, thirdArr, `Оставшиеся студенты: ${(rest.length === 0) ? '-' : rest.join(', ')}`];
// }

// console.log(sortStudentsByGroups(students));

//==============================================================================================================================

// console.log(typeof(String(null)));  // string

// const num = 7;
// console.log('https://google.com/catalog/' + num);
// console.log(25 + 'px');

// console.log(typeof(Number(true)));
// console.log(typeof(+'77'));
// console.log(typeof(parseInt('12.5px')));
// console.log(parseInt('12.5px', 10)); // 12
// console.log(parseFloat('12.5px')); // 12.5

// 0, NaN, null, undefined, '', false
// console.log(typeof(Boolean('')));
// console.log(typeof(!!'hfksll'));

// =================================================================================================

// let name = 'John';

// function sayHi() {
//     console.log('Hi, ' + name);
// }
// name = 'Pete';

// sayHi(); 

// function makeWorker() {
//     let name = 'Pete';
  
//     return function() {
//         console.log(name);
//     };
// }
  
// let name = 'John';
  
// // create a function
// let work = makeWorker();
  
// // call it
// work();

// function Counter() {
//     let count = 0;
  
//     this.up = function() {
//         return ++count;
//     };
  
//     this.down = function() {
//         return --count;
//     };
// }
  
// let counter = new Counter
// console.log( counter.up() ); // 1
// console.log( counter.up() ); // 2
// console.log( counter.down() ); // 1

// let phrase = 'Hello';

// if (true) {
//     let user = 'John';

//     function sayHi() {
//         console.log(`${phrase}, ${user}`);
//     }
// }

// sayHi();//Error

// function sayHi() {
//     console.log('Hi');
  
//     // давайте посчитаем, сколько вызовов мы сделали
//     sayHi.counter++;
// }
// sayHi.counter = 0; // начальное значение
  
// sayHi(); // Hi
// sayHi(); // Hi
  
// console.log(( `Вызвана ${sayHi.counter} раза` )); // Вызвана 2 раза


// function makeCounter() {
//     let count = 0;
  
//     function counter() {
//         return count++;
//     }
  
//     counter.set = value => count = value;
  
//     counter.decrease = () => count--;
  
//     return counter;
// }

// console.log([] + false - null + true); // NaN
// console.log([] + 1 + 2); // '12'