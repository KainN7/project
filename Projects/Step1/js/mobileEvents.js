// touchstart - когда пальцем коснулись элемента.
// touchemove - когда пальцем коснулись элемента и он смещается.
// touchend - как только палец оторвался от элемента.
// touchenter - срабатывает если ведем пальцем по экрану и попадаем на элемент,
// на которое навешано это событие.
// touchleave - палец продолжил скользить и ушел за пределы этого элемента.
// touchcancel - возникает, когда точка прикосновения больше не регестирируется на поверхности.


window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');

    box.addEventListener('touchstart', (e) => {
        e.preventDefault();  // рекомендуется всегда отменять стаандартное поведение браузера

        console.log('Start');
        console.log(e.targetTouches);
    });

  box.addEventListener('touchmove', (e) => {
        e.preventDefault();  

        console.log(e.targetTouches[0].pageX); // обращаемся к первому пальцу.
    });

     box.addEventListener('touchend', (e) => {
         e.preventDefault();  

         console.log('End');
     });
});

// touches - свойство выдает список всех пальцев, которые взаимодействуют с экраном.
// targetTouches - получаем все пальцы которые взаимодействуют с элементом.
// changedTouches - списко пальцев, которые участвуют в текущем событии.



