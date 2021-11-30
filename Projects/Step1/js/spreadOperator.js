'use strict';

// let a = 5,                  // примитивы передаются по значению.
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);


// const obj = {               // при работе с объектами идёт передача по ссылке.
//     a: 5,                   // передача по ссылке.
//     b: 1
// };

// const copy = obj; // Ссылка на объект


// copy.a = 10;

// console.log(copy);
// console.log(obj);

// 1. метод
function copy(mainObj) {                    // клонирование объекта с помощью цикла.
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {        // когда копируем объект есть 2 понятия глубокие
    a: 2,                // и поверхностные копии объектов             
    b: 5,                // ! сейчас была быстрая копия объекта - она берёт все обычные свойства
    c: {                 // которые были в родителе и создаёт независимые структуры.
        x: 7,            // Но как только появляется вложенная структура. (Объект, массив), 
        y: 4             // то это свойство будет иметь ссылочный тип данных
    }
};

const newNumbers = copy(numbers);           // клонирование объекта.

newNumbers.a = 10;
newNumbers.c.x = 10;


// console.log(newNumbers);
// console.log(numbers);

const add = {                           // создали поверхностную независимую копию объекта.            
    d: 17,                               // положили add в numbers.                      
    e: 20
};

// 2 метод.
const clone = Object.assign({}, add); // создаём клон метод assign.

clone.d = 20;

// console.log(add);
// console.log(clone);

// 3 метод.
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();         // метод slice копирует старый массив, можно передвать аргументы.

newArray[1] = 'Privet';
console.log(newArray);
console.log(oldArray);

// 4 метод. Оператор разворота.      spread оператор...

const video = ['youtube', 'vimeo', 'rutube'],
      blogs = ['wordpress', 'livejournal', 'blogger'],
      internet = [...video, ...blogs, 'vk', 'facebook'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);              // В ES 8 стандарте разворот работает для объектов.

const array = ['a', 'b'];

const newAarray = [...array];         // создали копию массива.
console.log(newAarray);

const q = {
    one: 1,
    two: 2
};

const newObj = {...q};

console.log(newObj);