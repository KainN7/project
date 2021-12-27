// 'use strict';
//                     //год  месяц  день  часы
// const now = new Date(2021, 11, 27, 24);    // передаём дату с пк
//                                            // месяцы считаются с 0.
// console.log(now);



// const now = new Date(0); // любые даты можно трансформировать в миллисекунды, а их обратно в дату.
// // 0 = 1970 год. 1 января.
// console.log(now);

// const now = new Date('2021-12-28'); // год всегда должен быть 4-х значным.
// //   new Date.parse('2021-12-28');  // тоже самое что и сверху.

// console.log(now.setHours(40)); // set устанавливает.
// console.log(now);

// console.log(now.getFullYear());  // get получает
// console.log(now.getMonth());
// console.log(now.getDate());
// // Так же можно получить часы, минуты, секунды и милесекунды, если нужно.
// console.log(now.getDay());  // нумерация начинаается с воскресения.
// console.log(now.getHours()); // местное время
// console.log(now.getUTCHours()); // время по гриндвичу.

// console.log(now.getTimezoneOffset()); // получаем разницу между часовыйм поясом и utc в минутах 420(7) часов.
// console.log(now.getTime()); // сколько времени прошло с 1970 года.

// let start = new Date();

// for (let i = 0; i < 100000; i++) {
//     let some = i ** 3;
// }

// let end = new Date();

// alert(`Цикл отработал за ${end - start} миллисекунд`);
// сделали бенчмарк.

