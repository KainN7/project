'use strict';

// console.log(document.head);      // document - дерево. DOM. Получили доступ к head.
// console.log(document.documentElement); // Получаем HTML со всем содержимым.
// console.log(document.body.childNodes);  // Получаем узлы, которые являются детьми у body.
// console.log(document.body.firstChild); // получаем первый узел.
// console.log(document.body.firstElementChild);
// console.log(document.body.lastChild); // получаем последний узел.

// console.log(document.querySelector('#current').parentNode.parentNode); // получаем родителей.
// console.log(document.querySelector('#current').parentElement);

// console.log(document.querySelector('[data-current="3"]').nextSibling);  // получаем HTML атрибут,
// // следующего соседа.
// console.log(document.querySelector('[data-current="3"]').previousSibling); 
// // предыдущий сосед.
// console.log(document.querySelector('[data-current="3"]').nextElementSibling); 
// // получили следующий элемент, а не ноду, аналогично делаем предыдущий.


for (let node of document.body.childNodes) {
    if (node.nodeName == '#text') {     // пропустили все ноды с текстом.
        continue;
    }
    console.log(node);  
}