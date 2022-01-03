'use strict';

const box = document.querySelector('.box'),
      btn = document.querySelector('button');

// модальное окно
// const width = box.clientWidth;  // получаем ширину без margin and padding and scroll;
// const height = box.clientHeight; //получаем высоту без margin and padding and scroll;
// const width = box.offsetWidth;  
// const height = box.offsetHeight;

const width = box.scrollWidth;  
const height = box.scrollHeight;
console.log(width, height);

btn.addEventListener('click', () => {
    // после клика устанавливаему бокса полную высоту с учетом всей прокрутки.
    box.style.height = box.scrollHeight + 'px'; 
    // console.log(box.scrollTop);
});

// В JS координаты начинаются в левом верхнем углу экрана.

console.log(box.getBoundingClientRect().top); //  возвращает размер элемента и его позицию

const style = window.getComputedStyle(box, ); // возвращает объект, содержащий значения всех CSS-свойств

console.log(style.display); // получаем значение в данном случае display block

// При помощи JS мы не можем работать с псевдоэлементами, мы их ни как не получим со страницы
// Но стили псевдоэлементов мы поучить можем.

console.log(document.documentElement.scrollTop);