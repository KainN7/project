'use strict';

const btns = document.querySelectorAll('button'),
      wrapper = document.querySelector('.btn-block');

// console.log(btns[0].classList.length); // не забывать про псевдомассив.
// console.log(btns[0].classList.item(1));
// позвполяет получить класс, который распологается под определённым индексом.
//Пример 0 -blue. 1-some.
// console.log(btns[1].classList.add('red'));
// Добавил класс.
// console.log(btns[0].classList.remove('blue'));
// Удалил класс.
// console.log(btns[0].classList.toggle('blue'));
// Если класс есть, будет убран, если наоборот, добавлен

// if (btns[1].classList.contains('red')) {
//     console.log('red');
// }
// позволяет проверять наличие класса на определённом элементе
// и возвращаает булиновое значение.

btns[0].addEventListener('click', () => {
//     if (!btns[1].classList.contains('red')) {   // проверяем что класса нет
//         btns[1].classList.add('red');
//    } else {
//         btns[1].classList.remove('red');
//    }
    btns[1].classList.toggle('red');
});

// console.log(btns[0].className); // устарело!

// 2 часть. Делегирование событий.


wrapper.addEventListener('click', (event) => {
    // console.dir(event.target); // смотрим target в качестве объекта
    if (event.target && event.target.matches("button.red")) {
        console.log('Hello');
    }
});

// btns.forEach(btn => {  // не видит кнопку, которую добавили.
//     btn.addEventListener('click', () => {
//         console.log('Hello');   
//     });
// });
const btn = document.createElement('button'); // пока существует только в js
btn.classList.add('red'); 
wrapper.append(btn); // добавили во wrapper в DOM