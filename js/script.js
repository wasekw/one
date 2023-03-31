/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

//'use strict';

//const movieDB = {
//    movies: [
//        "Логан",
//        "Лига справедливости",
//        "Ла-ла лэнд",
//        "Одержимость",
//        "Скотт Пилигрим против..."
//    ]
//};

//const adv = document.querySelectorAll('.promo__adv img');
//const poster = document.querySelector('.promo__bg');
//const genre = poster.querySelector('.promo__genre');
//const movieList = document.querySelector('.promo__interactive-list');


//adv.forEach(el => el.remove());
//genre.textContent = 'ДРАМА';
//poster.style.backgroundImage = `url('img/bg.jpg')`;
//movieList.innerHTML = '';
//movieDB.movies.sort();
////console.log(movieDB.movies);
//movieDB.movies.forEach((film, index) => {
//    movieList.innerHTML += `
//    <li class="promo__interactive-item">${index + 1} ${film}
//        <div class="delete"></div>
//    </li>`;
//});


//const film = document.querySelectorAll('.promo__interactive-item');
//console.log(film);
//sortMovies.forEach((el, ind) => {
//    el.textContent = `${ind + 1} ${el}`;
//})

//==================================================================
/* Задания на урок:

1) Реализовать функционал, что после заполнения формы и нажатия кнопки "Подтвердить" - 
новый фильм добавляется в список. Страница не должна перезагружаться.
Новый фильм должен добавляться в movieDB.movies.
Для получения доступа к значению input - обращаемся к нему как input.value;
P.S. Здесь есть несколько вариантов решения задачи, принимается любой, но рабочий.

2) Если название фильма больше, чем 21 символ - обрезать его и добавить три точки

3) При клике на мусорную корзину - элемент будет удаляться из списка (сложно)

4) Если в форме стоит галочка "Сделать любимым" - в консоль вывести сообщение: 
"Добавляем любимый фильм"

5) Фильмы должны быть отсортированы по алфавиту */

'use strict';

// Возьмите свой код из предыдущей практики

document.addEventListener('DOMContentLoaded', ()=> {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img');
    const poster = document.querySelector('.promo__bg');
    const genre = poster.querySelector('.promo__genre');
    const movieList = document.querySelector('.promo__interactive-list');
    const addForm = document.querySelector('form.add');
    const addInput = addForm.querySelector('.adding__input');
    const checkbox = addForm.querySelector('[type="checkbox"]');

    //console.log(addForm);
    //addForm.addEventListener('submit', (event) => {
    //    event.preventDefault();
    //    console.log(newFilm);
    //    let newFilm = addInpit.value;
    //    let favorite = checkbox.checked;
    //    movieDB.movies.push(newFilm);
    //    sortArr(movieDB.movies);
    //    createMoveisList(movieDB.movies, movieList);
    //    event.target.reset();
    //});
    
    
    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {

            if (newFilm.length > 21) {
                newFilm = `${newFilm.slice(0, 22)}...`;
            }

            if (favorite) {
                console.log("Добавляем любимый фильм");
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);
    
            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();

    });

    const deleteAdv = (arr) =>{
        arr.forEach(el => el.remove());
    };
    
    const makeChangies = () => {
        genre.textContent = 'ДРАМА';
        poster.style.backgroundImage = `url('img/bg.jpg')`;
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    //movieList.innerHTML = '';
    
    ////console.log(movieDB.movies);
    //movieDB.movies.forEach((film, index) => {
    //    movieList.innerHTML += `
    //    <li class="promo__interactive-item">${index + 1} ${film}
    //        <div class="delete"></div>
    //    </li>`;
    //});
    
    
    //const film = document.querySelectorAll('.promo__interactive-item');
    //console.log(film);
    //sortMovies.forEach((el, ind) => {
    //    el.textContent = `${ind + 1} ${el}`;
    //})

    //function createMoveiList(parent, films) {
    //    parent.innerHTML = '';
    //    sortArr(films);
        
    //    films.forEach((film, index) => {
    //        parent.innerHTML += `
    //        <li class="promo__interactive-item">${index + 1} ${film}
    //            <div class="delete"></div>
    //        </li>`;
    //    });
    //}


    function createMovieList(films, parent) {
        parent.innerHTML = "";
        sortArr(films);
    
        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);

                createMovieList(films, parent);
            });
        });
    }

    deleteAdv(adv);
    makeChangies();
    sortArr(movieDB.movies);
    createMovieList(movieDB.movies, movieList);
})