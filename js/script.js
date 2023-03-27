const box = document.getElementById('box');
const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
const wrapper = document.querySelector('.wrapper');
const hearts = document.querySelectorAll('.heart');

// box.style.backgroundColor = '#ff00ff';
// box.style.width = '500px';

btns[1].style.borderRadius = '95%';
circles[0].style.backgroundColor = 'red';
box.style.cssText = 'background-color: #ff00ff; width: 400px';

//for (let i = 0; i < hearts.length; i++) {
//  hearts[i].style.cssText = 'background-color: green; width: 200px';
//}

hearts.forEach(el => {
  el.style.cssText = 'background-color: green; width: 140px';
});

const div = document.createElement('div');
//const text = document.createTextNode('I was here!');

div.classList.add('black');
//document.body.append(div);
document.body.appendChild(div);
//wrapper.prepend(div);
//hearts[2].before(div);
//btns[1].after(div);

//circles[1].remove();

//btns[3].replaceWith(circles[1]);
//wrapper.insertBefore(div, btns[0]);

//div.innerHTML = 'Hello world!';
div.innerHTML = '<h1>Hello World!!!</h1>';

//div.textContent = 'HI it`s me!';

div.insertAdjacentHTML('beforeend', '<h2>Hello!!! Baby</h2>');
