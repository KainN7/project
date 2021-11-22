"use strict";

if (1) {                // Условия превращают любой тип данных в булиновый, 
    console.log('Ok!'); // для того чтобы проверить правдивость.
} else {
    console.log('Error');
}



// if (num < 49) {
//     console.log('Error');
// } else if (num > 100) {
//     console.log('Много');
// } else {
//     console.log('Ok!');
// }

// (num === 50) ? console.log('Ok!') : console.log('Error'); // в тернарном операторе учавствуют 3 аргумента.


const num = '50';
switch (num) {                    // конструкция switch всегда идёт на строгое сравнение
    case '49': 
        console.log('Неверно');
        break;
    case '100':     
        console.log('Неверно');
        break;
    case '50': 
        console.log('В точку!');
        break;
    default: 
        console.log('Не в этот раз');
        break; 
}