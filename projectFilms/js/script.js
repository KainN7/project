/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'), // искал рекламные блоки.
      poster = document.querySelector('.promo__bg'),  // такой элемент всего один.
      genre = poster.querySelector('.promo__genre'), // Нашли жанр внутри  постера.
      movieList = document.querySelector('.promo__interactive-list');                                   
                                            //Нашел список фильмов.
adv.forEach(item =>{   // стрелочная функция. Удалили рекламные блоки со страницы.
    item.remove();     // она предпочтительнее.
});

genre.textContent = 'драма';

poster.style.backgroundImage = 'url("img/bg.jpg")';     // использовать разные виды кавычек особенно касается 
                                                        // css свойств.
movieList.innerHTML = '';  // очистили HTML структуру.

movieDB.movies.sort(); // отсортировали по алфавиту.

// console.log(poster.innerHTML); // позволяет так же получать элементы со страницы.

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `  
        <li class="promo__interactive-item">${i + 1} ${film}
                <div class="delete"></div>
        </li>
    `;
}); // динамически сформировали список и поместили егона страницу, с нумерацией по
    // порядку.


// adv.forEach(function(item) {   // функция обычная сделали то же что и выше.
//     item.remove();
// });


