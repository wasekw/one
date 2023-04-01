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