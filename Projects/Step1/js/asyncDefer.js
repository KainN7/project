'use strict';

const p = document.querySelectorAll('p');
console.log(p);



function loadScript(src) {
    const script = document.createElement('script');
    script.src = src;
    script.async = false; // скрипт не будет вести себя как async
    document.body.append(script);
}

loadScript('/Projects/Step1/js/test.js');
loadScript('/Projects/Step1/js/some.js');
