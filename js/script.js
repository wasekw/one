const btn = document.querySelector('#btn');

//btn.onclick = function() {
//  alert('Click!!!');
//};

//btn.onclick = function() {
//  alert('Another click!')
//}; Буде виконувати тильки другий клик!


//btn.addEventListener('click', function() {
//  alert('Click!!!');
//});

//btn.addEventListener('click', () => {
//  alert('Second click!!!');
//});

//btn.addEventListener('mouseover', (event) => {
//  console.log(event);
//  event.target.remove();
//  //console.log('Hover');
//});
const deleteElement = (e) => {
  e.target.remove();
  console.log(e.target);
}

btn.addEventListener('click', deleteElement);