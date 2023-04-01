'use strict';

//const box = document.querySelector('.box');

//const newHeight = 110;
//const newWidth = 400;

//function changeParams(elem, h, w) {
//   // elem.style.height = `${h || 200}px`;
//   // elem.style.width = `${w || 200}px`;
//   elem.style.height = `${h ?? 200}px`;
//   elem.style.width = `${w ?? 200}px`;
//   elem.innerHTML = (h ?? 200) * (w ?? 200);
//}

//changeParams(box, newHeight, newWidth);

//let userName;
//let userKey;

//console.log(userName ?? userKey ?? 'User');

//=================================================

//let temp = obj.first;
//let nestedProp = ((temp === null || temp === undefined) ? undefined : temp.second);

//let nestedProp = obj.first?.second;

//const box = document.querySelector('.box');
//const block = document.querySelector('.block');

//console.log(block);

//console.log(block?.textContent);
//if (block)  {
//   console.log(block.textContent);
//} console.log(undefined);

//block?.textContent = '123'; // Syntacsis error

//console.log(1 + 3);


//const userData = {
//   name: 'Vasek',
//   age: null,
//   say: function() {
//      console.log('Hello');
//   }
//}

//userData.say();
//userData.hey?.();

//if (userData && userData.skills && userData.skills.js) {
//   console.log(userData.skills.js);
//}
//console.log(userData?.skills?.js);

//=================================================================

//const boxesQuery = document.querySelectorAll('.box');
//const boxesElement = document.getElementsByClassName('box');

//boxesQuery.forEach(box => {
//   if (box.matches('.this')) console.log(box);
//});

//console.log(boxesQuery[0].closest('.wrapper'));

//boxesQuery[0].remove();
//boxesElement[0].remove();

//for (let i = 0; i < 5; i++) {
//   const div = document.createElement('div');
//   div.classList.add('box');
//   document.body.append(div);
//   //boxesElement[boxesElement.length] = div
//}

//console.log(boxesElement);
//console.log(boxesQuery);
////console.log(document.body.children);

//console.log(Array.from(boxesElement));

//=================================================================

//let id = Symbol('id');

//const obj = {
//   'name': 'Test',
//   [id]: 1,
//   getId: function() {
//      return this[id];
//   }
//}

//let id = Symbol('id');
//let id2 = Symbol('id');
//console.log(id == id2); // false

//obj[id] = 1;

//console.log(obj);
//console.log(obj.getId());
//console.log(Object.getOwnPropertySymbols(obj));
//console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);

//for (let value in obj) console.log(value);

//const myAwesomeDB = {
//   films: [],
//   actors: [],
//   //id: 123
//   //[Symbol('id')]: 123
//   [Symbol.for('id')]: 123
//}

//// Сторонний код из другой библиотеки

//myAwesomeDB.id = '1244234524';

//console.log(myAwesomeDB[Symbol.for('id')]);
//console.log(myAwesomeDB);

//========== Descriptory =====================================
//const birthday = Symbol('birthday');

//const user = {
//   name: 'Alex',
//   surName: 'Smith',
//   //birthday: '20/04/1993',
//   [birthday]: '12.12.2012',
//   showMyPublicData: function() {
//      console.log(`${this.name} ${this.surName}`);
//   }
//}

//Object.defineProperty(user, 'birthday', {writable: false});

//Object.defineProperty(user, 'birthday', {value: prompt('Date?'), enumerable: true, configurable: true});

//console.log(Object.getOwnPropertyDescriptor(user, 'name'));
//Object.defineProperty(user, 'name', {writable: false});
//Object.defineProperty(user, 'gender', {value: 'male'});
//console.log(Object.getOwnPropertyDescriptor(user, 'gender'));
//user.name = 'Ivan'; // TypeError 
//console.log(user);
// writable
// enumerable
// configurable

//Object.defineProperty(user, 'showMyPublicData', {enumerable: false});
//Object.getOwnPropertyDescriptors(user, [Symbol('birthday')]);
//for (let key in user) console.log(key);

//console.log(Object.getOwnPropertyDescriptor(Math, 'PI'));

//Object.defineProperties(user, {
//   name: {writable: false},
//   surName: {writable:false}
//})

//=========== for of  ==========================================

//const user = {
//   name: 'Alex',
//   surName: 'Smith',
//   birthday: '20/04/1993',
//   showMyPublicData: function() {
//      console.log(`${this.name} ${this.surName}`);
//   }
//}

//const arr = ['a', 'b', 'c'];
//Array.prototype.someMethod = function() {};
//const str = 'string';
//for (let key in user) {
//   console.log(user[key]);
//}

//for (let key in arr) {
//   console.log(arr[key]);
//}

//for (let key in str) {
//   console.log(str[key]);
//}

//for (let key of arr) {
//   console.log(key);
//}

//const saleries = {
//   john: 500, 
//   ivan: 1000,
//   ann: 5000,
//   hello: function() {
//      console.log('Hello');
//   }
//}

//saleries[Symbol.iterator] = function() {
//   return {
//      current: this.john,
//      last: this.ann,
//      next() {
//         if (this.current < this.last) {
//            this.current += 500;
//            return {done: false, value: this.current}
//         } else {
//            return {done: true}
//         }
//         //{done:true, value: 123}
//      }
//   }
//}

//for (let res of saleries) {
//   console.log(res);
//}

//const iterator = saleries[Symbol.iterator]();
//console.log(iterator.next());
//console.log(iterator.next());
//console.log(iterator.next());
//console.log(iterator.next());

//================ MAP ==========================================