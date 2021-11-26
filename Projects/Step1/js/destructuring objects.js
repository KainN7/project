'use strict';

const options = {                             // с помощью for of нельзя перебирать объекты.
    name: 'test',                              // у объектов нет свойста lenght. 
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',                       // методы это действия, которые умеет совершать наш объект.
        bg: 'red'
    },
    makeTest: function(){                       // создали метод сами.
        console.log('Test');
    }
};

options.makeTest();                         // круглые скобки заапускают, идёт в работу.

const {border, bg} = options.colors;         // деструктуризация объекта.      

console.log(border);
// console.log(Object.keys(options).length);  // получаем массив со всеми ключами.

// const obj = {
//     name: 'Alex',
//     age: 26,
//     lang: 'ru, eng',
// };
// console.log(Object.keys(obj).length);   // встроенные методы

// console.log(options['colors']['border']);

// delete options.name;                        // удаляет свойства из объекта.

// console.log(options);


// let counter = 0;
// for (let key in options){                        // перебирает все свойства, элементы внутри объекта.
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }                                           
// }
// console.log(counter);
                                           
                   

