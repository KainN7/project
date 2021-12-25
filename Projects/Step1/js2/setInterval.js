'use strict';

const btn = document.querySelector('.btn');
let timerId,
    i = 0;

function myAnimation() {
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setInterval(frame, 10);
    function frame() {
        if (pos === 300) {
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);
        





// btn.addEventListener('click', () => {
//     // const timerId = setTimeout(logger, 2000); // начнётся через 2 секунды.
//     timerId = setInterval(logger, 500); // будет повторяться кааждые 2 секунды. 
// });

// function logger () {
//     if (i === 3) {
//         clearInterval(timerId);
//     }
//     console.log('text');
//     i++;
// }

// let id = setTimeout(function log(){
//     console.log('Hello'); 
//     id = setTimeout(log, 500);     //рекурсия
// }, 500);
