'use strict';

let str = 'some';               
let strObj = new String(str);

// console.log(typeof(str));
// console.log(typeof(strObj));

console.dir([1, 2, 3]);  // создали эксемпляр массива

const soldier = {
    health: 400,
    armor: 100,
    sayHello: function() {
        console.log('Hello');
    }
};

const jonh = Object.create(soldier);
jonh.sayHello();

// const jonh = {
//     health: 100
// };

// Object.setPrototypeOf(jonh, soldier);
// console.log(jonh.armor);


// Устаревший формат не работает.
// jonh._proto_ = soldier;





