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
    // box.style.height = box.scrollHeight + 'px'; 
    console.log(box.scrollTop);
});
