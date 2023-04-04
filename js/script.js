const btns = document.querySelectorAll('button');
const parent = document.querySelector('#first');

//console.log(btns[0].classList.length);  // 2
//console.log(btns[0].classList.item(0)); // blue
//console.log(btns[1].classList.add('red'));
//console.log(btns[0].classList.remove('blue'));
//console.log(btns[0].classList.toggle('blue')); // false

//if (btns[1].classList.contains('red')) {
//  console.log('Second button have red class!!!');
//}

//btns[0].addEventListener('click', () => {
  //if (!btns[1].classList.contains('red')) {
  //  btns[1].classList.add('red');
  //} else {
  //  btns[1].classList.remove('red');
  //}

//    btns[1].classList.toggle('red');
//});

//console.log(btns[0].className);  // blue some


parent.addEventListener('click', function(event) {
  //console.dir(event.target);

  if (event.target && event.target.tagName === "BUTTON") {
    //event.target.classList.add('red');
    //console.log('Hello');

    const btn = document.createElement('button');
    btn.classList.add('red');
    parent.append(btn);
  }
})

