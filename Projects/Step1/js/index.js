'use strict';

const arr = [0, 1, 2, 3, 6, 8];     // массив служит для того, чтобы данные хранились строго по порядку.
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

arr.forEach(function(item, i, arr) {
    console.log(`${i}: ${item} внутри массива ${arr}`);
});

// arr.pop(); // удаляет элемент с конца массива.
// arr.push(10); // добавляет элемент в конец массива.

// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

for (let value of far) {
    console.log(value);        // можно использовать брейк и континью.
}                            

const str = prompt('', '');
const products = str.split(', ');