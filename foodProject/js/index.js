'use strict';
window.addEventListener('DOMContentLoaded', () => {

    // Tabs

    const tabs = document.querySelectorAll('.tabheader__item'),
          tabsContent = document.querySelectorAll('.tabcontent'), 
          tabsParent = document.querySelector('.tabheader__items'); // будем использовать делегироваание событий.
        
    function hideTabContent() {
        tabsContent.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('show', 'fade');
        });      // не забывать про псевдомаассив. Используем forEach.
        
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active');
        });
    }    
        
    function showTabContent(i = 0) { // по умолчанию будет 0. Если функция вызвалась без аргумента.
        tabsContent[i].classList.add('show', 'fade');
        tabsContent[i].classList.remove('hide');
        tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;

        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {  // элемент и номер по порядку.
                if (target == item) {
                    hideTabContent();
                    showTabContent(i); 
                }
            });
        }
    });

    // Timer

    const deadline = '2021-12-29'; // дата нормально парсится

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()),  // количество милесекунд в нашем конечном времени.
              days = Math.floor(t / (1000 * 60 * 60 * 24)), // получаем кол-во суток
              hours = Math.floor((t / (1000 * 60 * 60) % 24)), // получааем минуты
              minutes = Math.floor((t / 1000 / 60) % 60), // получаем минуты
              seconds = Math.floor((t / 1000) % 60);
              
              return {
                'total': t, 
                'days': days,
                'hours': hours,
                'minutes':minutes,
                'seconds': seconds
              };
            }    

            function getZero (num) {   // добавляем 0 перед числом, если оно однозначное.
                if (num >= 0 && num < 10) {
                    return `0${num}`;
                } else {
                    return num;
                }
            }
            
    function setClock(selector, endtime) { //устанавливаем часы на страницу
        const timer = document.querySelector(selector),
              days = timer.querySelector('#days'), 
              hours = timer.querySelector('#hours'),  
              minutes = timer.querySelector('#minutes'),  
              seconds = timer.querySelector('#seconds'),
              timeInterval = setInterval(updateClock, 1000);  

        updateClock(); // чтобы не было мигания верстки.  функция инициализации.      

        function updateClock() {  // функция обнавления времени.
            const t = getTimeRemaining(endtime);

            days.innerHTML = getZero(t.days); 
            hours.innerHTML = getZero(t.hours);
            minutes.innerHTML = getZero(t.minutes);
            seconds.innerHTML = getZero(t.seconds);

            if (t.total <= 0) {
                clearInterval(timeInterval);
            }

        }
    }
setClock('.timer', deadline);

});


