const btn = document.querySelector('#btn');
const overlay = document.querySelector('.overlay');
const btns = document.querySelectorAll('button');

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

// let i = 0;
const deleteElement = (e) => {
    // e.target.remove();

    console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement);
    // }

};

btn.addEventListener('click', deleteElement, {once: true});
overlay.addEventListener('click', deleteElement, {once: true});

// const link = document.querySelector('a');
// link.addEventListener('click', (event) => {
//     event.preventDefault();

//     console.log(event.target);
//     console.log(link.href);
// });

// btns.forEach(btn => {
//     btn.addEventListener('click', (e) => {
//         console.log(e.currentTarget);
//     });
// });