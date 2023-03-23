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

const men = {
    name: 'Piter',
    age: 45,
    address: {
        country: 'Ukraine',
        town: 'Kropivnitsky',
        street: 'Zurliva'
    },
    isMarried: true,
    sayName: function() {
        console.log(`Hello, my name is ${this.name}`);
    }
};

const menCopy = {...men};
menCopy.name = 'VAsek';
menCopy.address.town = 'Kiev';
console.log(menCopy);
console.log(men);

// menCopy.sayName();
// men.sayName();