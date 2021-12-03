'use strict';

// To String

// 1)
console.log(typeof(String(null)));      // Превратил null в строковый тип данных.
console.log(typeof(String(4)));         // старый способ

// 2)
console.log(typeof(null + ''));           // Конкатенация

const num = 5;

console.log('https://vk.com/catalog/' + num);     // старый вид кода.

const fontSize = 26 + 'px';

// To Number

// 1)
console.log(typeof(Number('4')));  

// 2)
console.log(typeof(+ '5'));  // унарный плюс.

// 3)
console.log(typeof(parseInt('15px', 10)));  // использовали метод.

let answ = +prompt('Hello', '');

// To boolean

// 0, '', null, undefined, NaN; // всегда false, остальное true.

// 1)
let switcher = null;  // подставляется false.

if (switcher) {                     // нативное преобразование.
    console.log('Working...');
} 

switcher = 1; // подставляется true.

if (switcher) {
    console.log('Working...');
} 

// 2)
console.log(typeof(Boolean('4')));  

// 3)

console.log(typeof(!!'4444'));   // 2 двойное отрицание привращает строку в boolean значение.