'use strict';

let num = 50;

// 1.
// while (num <= 55) {
//     console.log(num);
//     num++; 
// }

// 2 .
// do {
//     console.log(num);
//     num++; 
// }
// while (num < 55);

// 3. 

for (let i = 1; i < 10; i++) {
    if (i === 6) {
        // break; полностью прерываает цикл.
        continue;  // позволяет пропускать значения не останавливаая цикл.
    }
    console.log(i);
  
}