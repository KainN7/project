'use strict';

// класс всегда пишется с заглавной буквы

 class Rectangle {
    constructor(height, width) {
        this.height = height;   // свойства класса
        this.width = width;
    }

    calcArea() {  // пример метода 'возвращает площать прямоугольника'
        return this.height * this.width;
    }
 }

 const square = new Rectangle(10, 10);

 console.log(square.calcArea());