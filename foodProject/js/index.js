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
        }); // не забывать про псевдомаассив. Используем forEach.

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
            tabs.forEach((item, i) => { // элемент и номер по порядку.
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });

    // Timer

    const deadline = '2022-02-12'; // дата нормально парсится

    function getTimeRemaining(endtime) {
        const t = Date.parse(endtime) - Date.parse(new Date()), // количество милесекунд в нашем конечном времени.
            days = Math.floor(t / (1000 * 60 * 60 * 24)), // получаем кол-во суток
            hours = Math.floor((t / (1000 * 60 * 60) % 24)), // получааем минуты
            minutes = Math.floor((t / 1000 / 60) % 60), // получаем минуты
            seconds = Math.floor((t / 1000) % 60);

        return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };
    }

    function getZero(num) { // добавляем 0 перед числом, если оно однозначное.
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

        function updateClock() { // функция обнавления времени.
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

    // Modal

    // квадратные скобки потому что получаем через атрибут.

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]');

    function openModal() {
        modal.classList.add('show'); // можно и так сделать.
        modal.classList.remove('hide');
        // modal.classList.toggle('show'); 
        // если класса нет, добавит, если есть, уберёт.
        document.body.style.overflow = 'hidden';
        // блокируем прокрутку сайта при открытии модального окна.
        clearInterval(modalTimerId);
        // если посмотрел модальное окно, больше показываться не будет.
    }

    modalTrigger.forEach(btn => { // необходимо перебирать псевдомассив.
        // сам псевдо массив ничего не знает о странице и событиях которые там могут произойти. 
        btn.addEventListener('click', openModal);
    });



    function closeModal() {
        modal.classList.add('hide');
        modal.classList.remove('show');
        // modal.classList.toggle('show');
        document.body.style.overflow = '';
    }

    modalCloseBtn.addEventListener('click', closeModal); // не вызываем, просто передааём.

    // закрываем модальное окно при клике на подложку
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            // а здесь вызываем, потому что оно будет выполняться строго после условия.
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.code === "Escape" && modal.classList.contains('show')) {
            closeModal();
        }
    });

    const modalTimerId = setTimeout(openModal, 5000);
    // запускает окно через 5 секунд.

    function showModalByScroll() {
                                // видимая часть без прокрутки.
        if (window.pageYOffset + document.documentElement.clientHeight >= document.
            // видимая часть с прокруткой.
            documentElement.scrollHeight) {
                openModal();
                window.removeEventListener('scroll', showModalByScroll);
        }
    }

    window.addEventListener('scroll', showModalByScroll); // {once: true} не подходит из за scroll. Как только немного прокрутим оно слетает.
});