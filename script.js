// const timerId = setTimeout(function() {
//     console.log('Hello');
// }, 3000);

// const timerId = setTimeout(function(text) {
//     console.log(text);
// }, 3000, 'Hi Vasek!!!');

// const btn = document.querySelector('.btn');
// let timerId;
// let i = 0;


// function myAnimation() {
//     const box = document.querySelector('.box');
//     let position = 0;

//     const id = setInterval(frame, 10);
        
//         function frame() {
//             if (position == 300) {
//                 clearInterval(id);
//             } else {
//                 position++;
//                 box.style.top = position + 'px';
//                 box.style.left = position + 'px';
//             }
//         }
// }

// btn.addEventListener('click', myAnimation);


// btn.addEventListener('click', () => {
    // const timerId = setTimeout(logger, 3000);
//     timerId = setInterval(logger, 3000);
// })
// const timerId = setTimeout(logger, 3000);

// clearInterval(timerId);
// function logger() {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('I am from function!!!');
//     i++;
// } 

// let id = setTimeout(function log() {
//     console.log('I am outside function');
//     id = setTimeout(log, 500);
// }, 500); 

//==============================================================================

// function func() {
//     // tham = 'string';
//     window.tham = 'string';
// } 

// const someRes = getData();
// const node = document.querySelector('.class');

// setInterval(function(){
//     if (node) {
//         node.innerHTML = someRes;
//     }
// }, 1000);

// function outer() {
//     const potantialyHugeArray = [];
//     return function inner() {
//         potantialyHugeArray.push('Hello');
//         console.log('Hello!!!');
//     }
// }

// const sayHello = outer();
// sayHello();
// sayHello();
// sayHello();


// function createElement() {
//     const div = document.createElement('div');
//     div.id = 'test';
//     // return div;
//     document.body.append(testDiv);
// }

// // const testDiv = createElement();
// createElement();

// // document.body.append(testDiv);

// function deleteElement() {
//     document.body.removeChild(document.getElementById('test'));
// }

//===================================================================================================

// let user = {
//     name: 'Vasek'
// };

// // const arr = [user];
// // const map = new Map();
// const weakMap = new WeakMap();
// weakMap.set(user, 'data'),
// // map.set(user, 'data');
// user = null;

// console.log(user);
// // console.log(arr[0]);

// // console.log(map.keys());
// console.log(weakMap.has(user)); // false


let cache = new WeakMap();

function cacheUser(user) {
    if (!cache.has(user)) {
        cache.set(user, Date.now());
    }

    return cache.get(user);
}

let lena = {name: 'Elena'};
const alex = {name: 'Alex'};
const vasek = {name: 'Vasek'};

cacheUser(lena);
cacheUser(vasek);
cacheUser(alex);

lena = null;

console.log(cache.has(alex));
console.log(cache.has(lena));
console.log(cache);

// WeakSet
// has, add, delete

let messages = [
    {text: 'Hello', from: 'John'},
    {text: 'Bye', from: 'Alex'},
    {text: 'Hi', from: 'Vasek'}
]

let readMessages = new WeakSet();

readMessages.add(messages[0]);
readMessages.add(messages[1]);

readMessages.add(messages[0]);

console.log(readMessages.has(messages[0]));
console.log(readMessages);
