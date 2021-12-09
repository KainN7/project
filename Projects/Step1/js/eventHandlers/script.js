'use strict';

const btns = document.querySelectorAll('button'),
      overlay = document.querySelector('.overlay');

// btn.onclick = function() {       // В реальных проектах такой код почти не используется.
//     alert('Click');
// };

// btn.onclick = function() {      // при записи обработчка таким синтаксисом удалить его потом не получится.
//     alert('Second click');      // первое действие потеряли
// };

let i = 0;
const deleteElement = (event) => {
    console.log(event.currentTarget);  // событие произошло на самом вложенном элементе,
    console.log(event.type);    // затем сработало на overlay.

    // i++;
    // if (i == 1) {
    //     btn.removeEventListener('click', deleteElement); // чаще всего вызывается в условии, когда код не нужен.
    // }
};

// btn.addEventListener('click', deleteElement);
// overlay.addEventListener('click', deleteElement);

btns.forEach(btn => {  //каждый элемент, который находится внутри
    btn.addEventListener('click', deleteElement, {once: true}); // once это чтобы сработало один раз
});

const link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();  // отменили стандартное поведение браузера.
    
    console.log(event.target);
});



// btn.addEventListener('click', (event, ) => {  // 1 аргумент объект события.
    // console.log(event.target); // получаем инфу.
    // event.target.remove(); // удалили кнопку 
    // console.log('Hover');     // с помощью такого синтаксиса можно назначать сразу несколько действий
// });                     // на одно событие



// btn.addEventListener('click', () => {  
//     alert('Second click');     // первое действие не потеряли. Выполняются оба по очереди.
// });        