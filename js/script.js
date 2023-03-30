// let article = document.getElementById('electriccars');

// article.dataset.columns; // "3"
// article.dataset.indexNumber; // "12314"
// article.dataset.parent; // "cars"

// console.log(document.body);
// console.log(document.head);
// console.log(document.documentElement); // html
// console.log(document.body.childNodes);
// console.log(document.body.firstChild);
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild);
// console.log(document.querySelector('#current').parentNode);
// console.log(document.querySelector('#current').parentNode.parentNode);
// console.log(document.querySelector('[data-current="3"]').nextSibling);
// console.log(document.querySelector('[data-current="3"]').nextElementSibling);
// console.log(document.querySelector('[data-current="3"]').previousElementSibling);

// const childNodes = document.body.childNodes;

// for (let node of childNodes) {
//     if (node.nodeName == '#text') {
//         continue;
//     }
//     console.log(node);
// }

//========================================================================================
// function pow(num, step) {
//     let answer = num;

//     for (let i = 2; i <= step; i++) {
//         answer *= num;
//     }
//     return answer;
// } 

// function pow(num, step) {
//     if (step === 1) {
//         return num;
//     } else {
//         return num * pow(num, step - 1);
//     }    
// }
    

// console.log(pow(2, 2));
// console.log(pow(2, 3));
// console.log(pow(2, 4));
// console.log(pow(12, 14));

// let students = {
//     js: [{
//         name: 'John',
//         progress: 100
//     }, {
//         name: 'Ivan',
//         progress: 60
//     }],

//     html: {
//         basic: [{
//             name: 'Piter',
//             progress: 20
//         }, {
//             name: 'Ann',
//             progress: 18
//         }],

//         pro: [{
//             name: 'Sam',
//             progress: 10
//         }]
//     },

//     semi: {
//         students: [{
//             name: 'Test',
//             progress: 100
//         }]
//     }

// };

// function getTotalProgressByIteration(data) {
//     let total = 0;
//     let students = 0;

//     for (let course of  Object.values(data)) {
//         // console.log(course);
//         if (Array.isArray(course)) {
//             students += course.length;

//             for (let i = 0; i <course.length; i++) {
//                 total += course[i].progress;
//             }
//         } else {
//             for (let subcourse of Object.values(course)) {
//                 students += subcourse.length;
//                 for (let i = 0; i <subcourse.length; i++) {
//                     total += subcourse[i].progress;
//                 }
//             }
//         }
//     }

//     return total / students;
// }

// console.log(getTotalProgressByIteration(students));

// function getTotalProgressByRecursion(data) {
//     if (Array.isArray(data)) {
//         let total = 0;

//         for (let i = 0; i <data.length; i++) {
//             total += data[i].progress;
//         }

//         return [total, data.length];
//     } else {
//         let total = [0, 0];

//         for (let subData of Object.values(data)) {
//             const subDataArr = getTotalProgressByRecursion(subData);
//             total[0] += subDataArr[0];
//             total[1] += subDataArr[1];
//         }

//         return total;
//     }
// }

// const result = getTotalProgressByRecursion(students);
// console.log(result[0] / result[1]);

//====================================================================================

function factorial(n) {
    // if (n == 1) {
    //     return 1;
    // } else {
    //     return n * factorial(n - 1);
    // }
    if (typeof(n) !== 'number' || !Number.isInteger(n)) {
        return 'Ошибка, проверьте данные';
    } else  if (n == 1) {
        return 1;
    } else {
        let result = 1;
     
        for (let i = 1; i <= n; i++) {
            result *= i;
        }
        return result;
    } 
}

console.log(factorial(4));