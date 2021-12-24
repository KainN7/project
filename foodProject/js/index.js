'use strict';
window.addEventListener('DOMContentLoaded', () => {

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
});
