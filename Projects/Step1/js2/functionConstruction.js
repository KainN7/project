'use strict';

// функция стала конструктором, с её помощью мы можем создавать новых пользоваателей.
// конструкторы можно использовать в слайдерах.
// Это стандарт ES 5. В ES 6 есть классы "синтаксический сахар." Ими пользуются сейчас.
// В JS изначально классов не было!
function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function() {
        console.log(`Hello ${this.name}`);
    };
}
// Пример класса.
// class User {
//     constructor(name, id) {
//         this.name = name;
//         this.id = id;
//         this.human = true;
//     }
//     hello() {
//         console.log(`Hello! ${this.name}`)
//     }
//     exit() {
//         console.log(`Пользователь ${this.name} вышел`)
//     }
// }

User.prototype.exit = function() {
    console.log(`Пользователь ${this.name} ушёл`);
};
// Прототип будет наследоваться потомками созданными только после него.

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit(); 

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex);
