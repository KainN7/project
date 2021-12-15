'use strict';

document.addEventListener('DOMContentLoaded', () => {  // дожидаемся построение DOM структуры, 
// чтобы скрипты нормально запустились и не было ошибки. Код ниже сработаает после загрузки DOM структуры.
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
          movieList = document.querySelector('.promo__interactive-list'),   
          //Нашел список фильмов.
          addForm = document.querySelector('form.add'),   // Нашел формы.
          addInput = addForm.querySelector('.adding__input'),  // Нашли то что внутри.
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {  // добавили обрааботчкик событий.
        event.preventDefault();  // отменили стандартное поведение браузера. Страница не будет перезагружаться.

        let newFilm = addInput.value; // получить название фильма от пользователя.
        const favorite = checkbox.checked;  // нажата ли галочка

        if (newFilm) {

            if (newFilm.length > 21) {  // выводим не больше 21 знака в названии фильма.
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if (favorite) {
                console.log('Добавляем любимый фильм');
            }

            movieDB.movies.push(newFilm);  // добавили новый фильм
            sortArr(movieDB.movies); // отсортировали нашу БД
    
            createMovieList(movieDB.movies, movieList); // создали список по новой
        }

        event.target.reset(); // сбросили форму.

    });

    const deleteAdv = (arr) => {
        adv.forEach(item =>{   // стрелочная функция. Удалили рекламные блоки со страницы.
            item.remove();     // она предпочтительнее.
        });
    };

    const makeChanges = () => {
        genre.textContent = 'драма';
    
        poster.style.backgroundImage = 'url("img/bg.jpg")';  // разные кавычки.
    };

    const sortArr = (arr) => {
        arr.sort();
    };

    function createMovieList(films, parent) {
        parent.innerHTML = '';  // очистили HTML структуру.
        sortArr(films);

        // console.log(poster.innerHTML); // позволяет так же получать элементы со страницы.
        
        films.forEach((film, i) => {
            parent.innerHTML += `  
                <li class="promo__interactive-item">${i + 1} ${film}
                        <div class="delete"></div>
                </li>
            `;  // динамически сформировали список и поместили егона страницу, с нумерацией по
            // порядку.
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
    makeChanges();
    createMovieList(movieDB.movies, movieList); 
    // вызываем все что объявили выше.
});

// adv.forEach(function(item) {   // функция обычная сделали то же что и выше.
//     item.remove();
// });




