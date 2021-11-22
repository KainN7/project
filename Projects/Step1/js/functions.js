'use strict';

let num = 20;       // Глобальная переменная

function showFirstMessage (text) {              // Чтобы функция заработала её необходимо вызвать.
    console.log(text);                          // Если функция не находит переменную внутри себя, она поднимается на уровень выше.
    console.log(num);                           // Локальная переменная. // имя функции должно быть глаголом с препиской того, какое выполняется действие.
}                                               // Переменные объявленные внутри функции существуют только внутри неё.  Они называются 'Локальными'.
                                                // Замыкание функции это сама функция вместе со всеми внешними переменными, которые ей доступны.


showFirstMessage("Hello World!"); 

console.log(num);



// console.log(calc(4, 3));
// console.log(calc(5, 6));
// console.log(calc(10, 6));

// function calc (a, b) {                     // function declaretion
//     return (a + b);                        // После return функция заканчивается и весь код после этой команды будет "мертв". Не будет использоваться.
//                                           // После return ничего не задаём.  // console.log('dwed');  // Unreachable код. "Недостижимый"
// }

function ret() {                         
    let num = 50;                           // Еще return возвращает значения наружу.
    return num;
}

const anotherNum = ret();
console.log(anotherNum);

const logger = function () {                  // function expression
console.log("Hello");
};

logger();

const calc = (a, b) =>{
    console.log('1');
    return a + b;
};

const x = calc