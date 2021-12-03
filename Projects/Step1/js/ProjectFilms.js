'use strict';

// ставим + чтобы работать с числом.      // + превращаает пустую строку в 0.

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
    
        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', ''),      // кнопка ответа в prompt = null.
                  b = prompt('На сколько оцените его?', '');
        
            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
        } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
            console.log("Вы классический зритель");
        } else if (personalMovieDB.count >= 30) {
            console.log("Вы киноман");
        } else {
            console.log("Произошла ошибка");
        }
    },
    showMyDb: function() {
        if (personalMovieDB.privat == false) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
        // for (let i = 1; i <= 3; i++) {   //   инфу для пользователя начинаем с 1.
        //         let genre = prompt(`Ваш любимый жанр под номером ${i}` );

        //         if (genre === '' || genre === null) {
        //             console.log('Вы ввели некорректные данные или не ввели их вовсе');
        //             i--;
        //         } else {
        //             personalMovieDB.genres[i - 1] = genre;      // инфу в массив пишем с 0.
        //         }
        //     }  

        for (let i = 1; i < 2; i++) {   //   инфу для пользователя начинаем с 1.
            let genres = prompt(`Введите ваши любимые фильмы через запятую`).toLowerCase();   // Можно и по другому.

            if (genres === '' || genres === null) {
                console.log('Вы ввели некорректные данные или не ввели их вовсе');
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');   
                personalMovieDB.genres.sort();
            }
        }  

            personalMovieDB.genres.forEach((item, i) => {       // item, каждый элемент в массиве, который мы перебираем
                console.log(`Любимый жанр ${i + 1} - это ${item}`);     // i -  номер по порядку
            });
    }
};













