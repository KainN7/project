'use strict';

// function showThis(a,b) {
//     console.log(this);
//     function sum() {
//         console.log(this);
//         return a + b;
//     }
    
//     console.log(sum());
// }
// showThis(4, 5);

// const obj = {
//     a: 20,
//     b: 15,
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout(); 
//         // функция, которая запускается внутри метода, не метод объекта.
//         // контекст вызова будет undefined.
//     }
// };
// obj.sum();

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log("Hello! " + this.name);
    };
}
let ivan = new User('Ivan', 23);


// 1) Обычная функция: this = window, но если стоит 'use strict',
// то будет undefined.
// 2) Контекст у методов объекта - сам объект