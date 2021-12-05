'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'), // из псевдо массива получили одну кнопку.
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'), // в эти переменные пойдут только те элементы, которые подойдут по 
      oneHeart = wrapper.querySelector('.heart');  // определенному селектору и находятся только внутри этого 
      // элемента.

// box.style.backgroundColor = 'blue'; //меняем inline style. они всегда перибивают все остальные.
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red'; // укаазываем чётко элемент, псевдомассив не знает про style,
// просто структура, которая содержит элементы.

// for (let i = 0; i < hearts.length; i++) {        // используем редко.
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue'; // item так назвали сердечки.
});

const div = document.createElement('div'); // существует только внутри JS.
// const text = document.createTextNode('Тут был я');

div.classList.add('black'); // добавляем из css.

wrapper.append(div);

// Работаем с DOM.
// document.body.append(div);  // положили в конец body наш div.
// wrapper.appendChild(div); Устаревшая конструкция.

// document.querySelector('.wrapper').append(div); // положили в конец wrapper.

// wrapper.append(div); // тоже самое что и выше при условии что использовали DOM.

// wrapper.prepend(div); // вставляет в начало.

// hearts[0].before(div); // перед 1 сердечком вставился черный квадратик.
// hearts[0].after(div); // после 1 сердечка вставился черный квадратик.

// wrapper.insertBefore(div, hearts[0]); // Устаревший метод.

// circles[0].remove(); // удалили 1 кружочек.
// wrapper.removeChild(hearts[1]); // Устаревший метод.

hearts[0].replaceWith(circles[0]); // заменили сердце кружочком.
// wrapper.replaceChild(circles[0], hearts[0]); // Устаревший метод.

// div.innerHTML = '<h1>Hello World</h1>'; // в прямоугольник запихали h1 и текст.
// работаем с HTML структурой, пишем innerHTML.

// div.textContent = '<h1>Hello World</h1>'; // работает только с текстом. HTML структура не войдет, теги пихать нельзя.
// Хотим записать только текст, используем textContent

div.innerHTML = '<h1>Hello World</h1>';
// div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>'); // вставили код перед элементом.
// div.insertAdjacentHTML('afterbegin', '<h2>Hello</h2>'); // вставили код в начало элемента
// div.insertAdjacentHTML('beforeend', '<h2>Hello</h2>'); // вставили код в конец элемента.
// div.insertAdjacentHTML('afterend', '<h2>Hello</h2>'); // вставляет код после элемента.


