

// const box = document.querySelector('.box');

// let observer = new MutationObserver(MutationRecord => {
//     console.log(MutationRecord);
// });

// observer.observe(box, {
//     childList: true
// })

// observer.disconnect();

//=====================================================================================

// const num = new Number(3);
// console.log(num);  // [Number: 3]

// function User(name, id) {
//     this.name = name;
//     this.id =id;
//     this.human = true;
//     this.hello = function() {
//         console.log(`Hello ${this.name}`);
//     }
// }

// User.prototype.exit = function() {
//     console.log(`Користувач ${this.name} вийшов!`)
// }

// const vas = new User('Vasek', 50);  
// const olya = new User('Olya', 40);  

// vas.hello();  // Hello Vasek
// olya.hello();  // Hello Olya

// vas.exit();  //Користувач Vasek вийшов!

// console.log(vas); // User { name: 'Vasek', id: 50, human: true }


//======================================================================================

// function sum(a, b) {
//     console.log(this === window); // => true
//     this.myNumber = 20; // add 'myNumber' property to global object
//     return a + b;
//  }
//  // sum() is invoked as a function
//  // this in sum() is a global object (window)
//  console.log(sum(15, 16));     // => 31
//  console.log(window.myNumber); // => 20

// function execute() {
//     'use strict'; // activate the strict mode
 
//     function concat(str1, str2) {
//       // the strict mode is enabled too
//       console.log(this === undefined); // => true
//       return str1 + str2;
//     }
//     // concat() is invoked as a function in strict mode
//     // this in concat() is undefined
//     console.log(concat('Hello', ' World!'));
//  }
 
//  execute();

//   ===================        IMPORTANT ===========================================
// var numbers = {
//     numberA: 5,
//     numberB: 10,
//     sum: function() {
//       console.log(this === numbers); // => true
//       function calculate() {
//         // this is window or undefined in strict mode
//         console.log(this === numbers); // => false
//         return this.numberA + this.numberB;
//       }
//       return calculate();
//     }
//  };
//  console.log(numbers.sum()); // => NaN or throws TypeError in strict mode

//  var numbers = {
//     numberA: 5,
//     numberB: 10,
//     sum: function() {
//       console.log(this === numbers); // => true
//       function calculate() {
//         console.log(this === numbers); // => true
//         return this.numberA + this.numberB;
//       }
//       // use .call() method to modify the context
//       return calculate.call(this);
//     }
//  };
//  console.log(numbers.sum()); // => 15

// ===============================================================================
// console.log(
//     ['Hello', 'World'].join(', ') // method invocation
//   );
//   console.log(
//     ({ ten: function() { return 10; } }).ten() // method invocation
//   );
//   var obj = {};
//   obj.myFunction = function() {
//     return new Date().toString();
//   };
//   console.log(
//     obj.myFunction() // method invocation
//   );
  
//   var otherFunction = obj.myFunction;
//   console.log(otherFunction());     // function invocation
//   console.log(parseFloat('16.60')); // function invocation
//   console.log(isNaN(0));            // function invocation

// function Animal(type, legs) {
//     this.type = type;
//     this.legs = legs;
//     this.logInfo = function() {
//       console.log(this === myCat); // => false
//       console.log('The ' + this.type + ' has ' + this.legs + ' legs');
//     };
//   }
//   var myCat = new Animal('Cat', 4);
//   // logs "The undefined has undefined legs"
//   // or throws a TypeError, in strict mode
//   setTimeout(myCat.logInfo, 1000);

//   function Animal(type, legs) {
//     this.type = type;
//     this.legs = legs;
//     this.logInfo = function() {
//       console.log(this === myCat); // => true
//       console.log('The ' + this.type + ' has ' + this.legs + ' legs');
//     };
//   }
//   var myCat = new Animal('Cat', 4);
//   // logs "The Cat has 4 legs"
//   setTimeout(myCat.logInfo.bind(myCat), 1000);


//   /* jshint esnext: true */

// class Planet {
//     constructor(name) {
//       this.name = name;
//     }
//     getName() {
//       console.log(this === earth); // => true
//       return this.name;
//     }
//   }
//   let earth = new Planet('Earth');
//   // method invocation. the context is earth
//   console.log(earth.getName()); // => 'Earth'


//   function Country(name, traveled) {
//     this.name = name ? name : 'United Kingdom';
//     this.traveled = Boolean(traveled); // transform to a boolean
//  }
//  Country.prototype.travel = function() {
//    this.traveled = true;
//  };
//  // Constructor invocation
//  var france = new Country('France', false);
//  // Constructor invocation
//  var unitedKingdom = new Country;
 
//  france.travel(); // Travel to France

// function increment(number) {
//     return ++number;
//   }
//   console.log(increment.call(undefined, 10));    // => 11
//   console.log(increment.apply(undefined, [10])); // => 11

// var rabbit = { name: 'White Rabbit' };
// function concatName(string) {
//   console.log(this === rabbit); // => true
//   return string + this.name;
// }
// // Indirect invocations
// console.log(concatName.call(rabbit, 'Hello '));  // => 'Hello White Rabbit'
// console.log(concatName.apply(rabbit, ['Bye '])); // => 'Bye White Rabbit'

/* jshint esnext: true */

// var sumArguments = (...args) => {
//     console.log(typeof arguments); // => 'undefined'
//     return args.reduce((result, item) => result + item);
//  };
//  console.log(sumArguments.name);      // => ''
//  console.log(sumArguments(5, 5, 6)); // => 16

/* jshint esnext: true */

// class Point {
//     constructor(x, y) {
//       this.x = x;
//       this.y = y;
//     }
//     log() {
//       console.log(this === myPoint);
//       setTimeout(()=> {
//         console.log(this === myPoint);      // => true
//         console.log(this.x + ':' + this.y); // => '95:165'
//       }, 1000);
//     }
//   }
//   var myPoint = new Point(95, 165);
//   myPoint.log();

/* jshint esnext: true */

// function Period (hours, minutes) {
//     this.hours = hours;
//     this.minutes = minutes;
//   }
//   Period.prototype.format = () => {
//     console.log(this === window); // => true
//     return this.hours + ' hours and ' + this.minutes + ' minutes';
//   };
//   var walkPeriod = new Period(2, 30);
//   console.log(walkPeriod.format());

//============================  THIS   ====================================



// function showThis(a, b) {
//     // console.log(this);
//     function sum() {
//         // console.log(this);
//         return a + b;
//         // return this.a +this.b
//     }
//     console.log(sum());
// } 
// showThis(2, 3);

// const obj = {
//     a: 3,
//     b: 2, 
//     sum: function() {
//         // console.log(this);
//         // return this.a + this.b;
//         function shout() {
//             console.log(this)
//         }
//         shout();
//     }
// }

// console.log(obj.sum());


// function sayName(surName) {
//     console.log(this);
//     console.log(this.name + ' ' + surName);
// }

// const user = {
//     name: 'John'
// }

// sayName.call(user, 'Week');
// sayName.apply(user, ['Week']);

//======================================================================================

// class Rectangle {
//     constructor(height, width) {
//         this.height = height;
//         this.width = width;
//     }

//     calcArea() {
//         return this.height * this.width;
//     }
// }

// class ColoredRectangleWithText extends Rectangle {
//    constructor(height, width, text, bgColor) {
//     super(height, width);
//     this.text = text;
//     this.bgColor = bgColor;
//    }

//    showMyProps() {
//     console.log(`Текст: ${this.text}, Цвет: ${this.bgColor}`);
//    }
// }

// const square = new Rectangle(10, 10);
// const longRect = new Rectangle(200, 1898);

// console.log(longRect.calcArea());
// console.log(square.calcArea());

// const blueRect = new ColoredRectangleWithText(20, 40, 'This is my text for my jornal', 'blue');
// blueRect.showMyProps();
// console.log(blueRect.calcArea());

//===================== ARGUMENTS  ==============================================

// const log = function(a, b, ...rest) {
//     console.log(a, b, rest);
// }

// log('operator', 'rest', 'usage', 'my', 'folowing', 'try');

// function calcOrDouble(number, basic) {
//     console.log(number * basic);
// }

// calcOrDouble(3, 5); // 15
// calcOrDouble(3); // NaN

// function calcOrDouble(number, basic) {
//     basic = basic || 2;
//     console.log(number * basic);
// }

// calcOrDouble(4);

// function calcOrDouble(number, basic = 2) {
//     console.log(number * basic);
// }

// ================= JSON  ===============================================

'use strict';

// const person = {
//     name: 'Vasek',
//     tel: '0950490641'
// };

// console.log(JSON.stringify(person)); // {"name":"Vasek","tel":"0950490641"}
// console.log(JSON.parse(JSON.stringify(person))); // { name: 'Vasek', tel: '0950490641' }

// const person = {
//     name: 'Vasek',
//     tel: '0950490641',
//     parents: {
//         mom: 'Olga',
//         dad: 'Valek'
//     }
// };
// const copyPerson = JSON.parse(JSON.stringify(person));
// copyPerson.parents.mom = 'Julia'

// console.log(copyPerson);
// console.log(person);

// ============== XMLHttpRequest ==========================================

const formData = new FormData(SomeFormElement).entries();

const jsonObject = formData.reduce((acc, [key, val]) => {
  acc[key] = val;
  return acc;
}, {});
