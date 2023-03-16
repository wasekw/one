var select = document.querySelector('select');
var list = document.querySelector('ul');
var h1 = document.querySelector('h1');

select.onchange = function() {
  var choice = select.value;

  // ДОБАВЬТЕ СЮДА УСЛОВНОЕ ВЫРАЖЕНИЕ
if(choice === 'Январь' || choice === 'Март' || choice === 'Май' || choice === 'Июль' || choice === 'Август' || choice === 'Октябрь' || choice === 'Декабрь') {
days = 31;
} else if(choice === 'Февраль') {
days = 28;
} else {
days = 30;
}
  createCalendar(days, choice);
}

function createCalendar(days, choice) {
  list.innerHTML = '';
  h1.textContent = choice;
  for (var i = 1; i <= days; i++) {
    var listItem = document.createElement('li');
    listItem.textContent = i;
    list.appendChild(listItem);
   }
}

createCalendar(31,'Январь');

var select = document.querySelector('select');
var html = document.querySelector('.output');

select.onchange = function() {
  var choice = select.value;

  // ДОБАВЬТЕ ИНСТРУКЦИЮ SWITCH
	switch(choice) {
	case 'Черная': update('black', 'white');
	break;
	case 'Белая': update('white', 'black');
	break;
	case 'Желтая': update('green', 'blue');
	break;
	case 'Лиловая': update('blue', 'green');
	break;
	default: update('#737373', '#345345');
}

  function update(bgColor, textColor) {
    html.style.backgroundColor = bgColor;
    html.style.color = textColor;
  }
}