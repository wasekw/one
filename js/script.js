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

//================ MAP  SET========================================

//function unique(arr) {
//  const set = new Set(arr);
//  return set;
//}

//let values = ["Hare", "Krishna", "Hare", "Krishna",
//  "Krishna", "Krishna", "Hare", "Hare", ":-O"
//];

//console.log( unique(values) ); // Hare,Krishna,:-O

//function aclean(arr) {
//  let map = new Map();

//  for (let word of arr) {
//    // разбиваем слово на буквы, сортируем и объединяем снова в строку
//    let sorted = word.toLowerCase().split("").sort().join(""); // (*)
//    map.set(sorted, word);
//  }

//  return Array.from(map.values());
//}

//let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

//console.log( aclean(arr) );


//--------------------------------------------------------------

//const user = {
//   name: 'Alex',
//   surName: 'Smith',
//   birthday: '20/04/1993',
//   showMyPublicData: function() {
//      console.log(`${this.name} ${this.surName}`);
//   }
//}

//const userMap = new Map(Object.entries(user));
//console.log(userMap);

//const newUserObj = Object.fromEntries(userMap);
//console.log(newUserObj);
////console.log(typeof(Object.keys(user)[0]));

//const shops = [
//  {rice: 200},
//  {meat: 500},
//  {oil: 239},
//  {bread: 45}
//];

//const map = new Map([
//  [{paper: 200}, 8900]
//]);


//const budjet = [72728, 7474674, 84656, 7463638];

//shops.forEach((shop, ind) => {
//   map.set(shop, budjet[ind]);
//});
//map.set(shops[0], 5000);
//map.set(shops[1], 15000);
//map.set(shops[2], 51200);

//map.set(shops[0], 5000).set(shops[1], 40009).set(shops[2], 747323).set(shops[3], 73837);

//console.log(map.get(shops[1])); // 7474674
//console.log(map.has(shops[2])); // true
//map.delete(key);
//map.clear();
//map.size;

//map.keys();
//const goods = [];
//for (let shop of map.keys()) {
//  console.log(shop);
//}

//{ paper: 200 }
//{ rice: 200 }
//{ meat: 500 }
//{ oil: 239 }
//{ bread: 45 }

//for (let shop of map.keys()) {
//  goods.push(Object.keys(shop)[0]);
//}

//console.log(goods);

//for (let price of map.values()) {
//  console.log(price);
//}

//for (let [shop, price] of map.entries()) {
//  console.log(shop, price);
//}

//map.forEach((value, key, map) => {
  //console.log(value);
  //console.log(key);
  //console.log(map);
//})

//const arr = [1, 2, 1, 3, 2, 4, 6, 7, 2, 1, 5];

//const set = new Set(arr);
//console.log(set);

//const arrStudent = ['Alex', 'Oleg', 'Ann', 'Vasek', 'Alex', 'Oleg'];
//const setStudent = new Set(arrStudent);

//function unique(arr) {
//  return Array.from(new Set(arr));
//}

//console.log(unique(arrStudent));
//console.log(setStudent);

//arrStudent.set('Ivan').set('Oleg');

//setStudent.has('Ivan'); //true
//setStudent.delete('Oleg');
//setStudent.clear();
//setStudent.size;

//for (let value of setStudent) console.log(value);
//setStudent.forEach((value,valueAgain, set) => {
//  console.log(valueAgain);
//})

//console.log(setStudent.values());
//console.log(setStudent.keys());
//console.log(setStudent.entries());

//=========================BigInt ========================

//console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

//const bigint = 12348429250957058058305893028940249709797n;
//const someBigint = BigInt(12348429250957058058305893028940249709797n);

//console.log(typeof(bigint)); // bigint

//console.log(Math.round(5.44n));  // Syntaksis error
//console.log(3n + 2);  // TypeError
//console.log(5n / 2n);  // 2n округляет в меньшую сторону

//const bigint = 5n;
//const number = 3;

//console.log(bigint + BigInt(number));
//console.log(number + Number(bigint));

//========================= TASK ========================================================

//function amountOfPages(summary){
//  //  if (summary < 10) {
//  //      return summary;
//  //  } else if (summary < 189) {
//  //      return (summary - 8);
//  //  } else { 
//  //    return (summary - 189) / 3; 
//  //}

//    let result = '';
//    let num = 0;
    
//    for (let i = 1; i <= summary; i++) {
//        result += i;
//        if (result.length === summary) {
//            num = i;
//            break;
//        }
//    }
//    return num;

//}

//console.log(amountOfPages(25));


//================= task pangramm =========================================================

//function isPangram(string) {
//    const alfabet = ['a', 'b', 'c', 'd', 'e', 'f', 'j', 'h', 'i', 'g', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    
//    const arr = string.split('');
//    const setArr = Array.from(new Set(arr)).sort();
    
//    for (let i = 0; i < alfabet.length; i++) {
//        if (!setArr.includes(alfabet[i])) { 
//            return false;
//    }
//  }
//return true;
//}

//console.log(isPangram('The quick brown fox jumps over the lazy dog'));

//// Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
//// Это должно экономить ресурсы компьютера
//function isPangram(string){
//  string = string.toLowerCase();
//  return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
//    return string.indexOf(x) !== -1;
//  });
//}

//// С другим методом и строка каждый раз преобразовывается в коллбэке
//function isPangram(string){
//  return 'abcdefghijklmnopqrstuvwxyz'
//    .split('')
//    .every((x) => string.toLowerCase().includes(x));
//}

//// При помощи цикла
//function isPangram(str) {
//  letters: for (var c = 0; c < 26; c++) {
//      for (let i = 0; i < str.length; i++) {
//          let s = str.charCodeAt(i)
//          if (s < 65 || s > 90 && s < 97 || s > 122) continue
//          if (s === 65 + c || s === 97 + c) continue letters
//      }
    
//      return false
//  }
  
//  return true
//}

//// При помощи Set
//function isPangram(string) {
//  return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
//}

//// С использованием регулярных выражений
//function isPangram(string){
//  return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
//};

//============= 3 task ===============================================

// Вариант с циклом
//function deepCount(a){
//  let count = a.length;
//  for (let i=0; i<a.length; i++) if (Array.isArray(a[i])) count += deepCount(a[i]);
//  return count;
//}

//// Вариант с методом reduce
//function deepCount(a){
//  return a.reduce((s,e)=>s+(Array.isArray(e) ? deepCount(e) : 0),a.length);
//}

//console.log(deepCount([1, 2, [3, 4, [5]]]));

//================================ classList ...........=========================

//let selectedTd;

//table.onclick = function(event) {
//  let target = event.target; // где был клик?

//  if (target.tagName != 'TD') return; // не на TD? тогда не интересует

//  highlight(target); // подсветить TD
//};

//function highlight(td) {
//  if (selectedTd) { // убрать существующую подсветку, если есть
//    selectedTd.classList.remove('highlight');
//  }
//  selectedTd = td;
//  selectedTd.classList.add('highlight'); // подсветить новый td
//}


//Счётчик: <input type="button" value="1" data-counter>
//Ещё счётчик: <input type="button" value="2" data-counter>

//<script>
//  document.addEventListener('click', function(event) {

//    if (event.target.dataset.counter != undefined) { // если есть атрибут...
//      event.target.value++;
//    }

//  });
//</script>