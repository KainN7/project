'use strict';

function first() {                     // если функции идут в коде одна за другой, это не значит
    // Do something                    // что они выполняются так же.
    setTimeout(function() {
        console.log(1);
    }, 500);
}

function second() {                   // коллбэк это функция, которая должная быть выполнена,
    console.log(2);                   // после того, как другаю завершила своё выполнение.
}

first();
second();

function learnJS(lang, callback) {
    console.log(`Я учу: ${lang}`);
    callback();
}

function done() {
    console.log('Я прошел этот урок!');
}

learnJS('JavaScript', done);