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

function fib(num) {
    
    let firstNum = 0;
    let secondNum = 1;
    let answerStr = `${firstNum} ${secondNum} `;
    
    if (num == 0 || typeof(num) !== 'number' || !Number.isInteger(num)) {
        return '';
    }  else if (num == 1) {
        return '0';
    }
    
    for (let i = 2; i < num; i++) {
        secondNum = firstNum + secondNum;
        firstNum = secondNum - firstNum;
        if (i != num -1) {
            answerStr += `${secondNum} `;
        } else {
            answerStr += `${secondNum}`;
        } 
    }
    return answerStr;
}

console.log(fib(22));