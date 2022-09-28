"use strict";

// const navEl = document.querySelector('.site-nav');
// const firstNavItemEl = navEl.firstElementChild;
// console.log(firstNavItemEl);
// console.log('ищет только детей ul', navEl.children);
// console.log('ищет второго ребенка и его текст', navEl.children[1].textContent);
// console.log('получает ссылку на последний элемент', navEl.lastElementChild);
// ==============================создание и добавление элементов=======================
// элемент h1 создался в памяти, но его пока нет в документе
var titleEl = document.createElement('h1'); // добавляем класс на тэг h1

titleEl.classList.add('page-title'); // добавляем текстовый контент в тэг

titleEl.textContent = 'Это заголовок :);'; // console.log(titleEl);
// нужен родительский элемент в документе, в который будем добавлять тэг Н1
// добавим заголовок в конец (appendChild) боди

document.body.appendChild(titleEl); // создаём новый тэг-элемент img изображение

var imageEl = document.createElement('img');
imageEl.src = "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260";
imageEl.alt = 'mountains';
imageEl.width = 640; // console.log(imageEl);
// добавляем изображение в конец боди

document.body.appendChild(imageEl); // ==============================добавим еще один элемент в наш список=======================

var navItemEl = document.createElement('li');
navItemEl.classList.add('site-nav__item');
var navLinkEl = document.createElement('a');
navLinkEl.classList.add('site-nav__link');
navLinkEl.textContent = 'Личный кабинет';
navLinkEl.href = '/profile'; // нам нужно чтобы созданная ссылка была внутри лишки,
// и только потом можем добавлять эти два элемента в документ(на страницу).
// поэтому добавляем в лишку ссылку

navItemEl.appendChild(navLinkEl); // console.log(navItemEl);
// console.log(navLinkEl);
// получаем ссылку на наш список ul с классом .site-nav

var navEl = document.querySelector('.site-nav'); // добавляем в этот список созданную лишку со ссылкой
// добавляет в конец
// navEl.appendChild(navItemEl);
// добавим в начало. первый элемент в скобке это тот элемент,
// который нам нужно поместить в список, а второй элемент в скобке
// это элемент перед которым мы хотим поместить
// Если вторым поставить нул, то элемент добавится в конец списка
// navEl.insertBefore(navItemEl, null);
// console.log('добавится перед вторым', navEl.insertBefore(navItemEl, navEl.children[1]));
// console.log('добавится перед первым', navEl.insertBefore(navItemEl, navEl.firstElementChild));
// console.log('добавится перед последним', navEl.insertBefore(navItemEl, navEl.lastElementChild));
// в документе создали див хиро, в него будем добавлять наш заголовок и картинку
// сначала получаем ссылку на хиро

var heroEl = document.querySelector('.hero'); // heroEl.appendChild(titleEl);
// heroEl.appendChild(imageEl);
// чтобы за несколько операций не передавать элементы,
// можно использовать метод append и передать всё что нужно через запятую
// всё попорядку

heroEl.append(titleEl, imageEl); // ==============================СОЗДАНИЕ КОЛЛЕКЦИЙ ЭЛЕМЕНТОВ=======================

var colorPickerOptions = [{
  label: 'red',
  color: '#d62828'
}, {
  label: 'green',
  color: '#06d6a0'
}, {
  label: 'blue',
  color: '#2ec4b6'
}, {
  label: 'grey',
  color: '#adb5bd'
}, {
  label: 'pink',
  color: '#ffadad'
}, {
  label: 'indigo',
  color: '#6411ad'
}]; // создадим кнопку для первого объекта
// const option = colorPickerOptions[0];
// const buttonEl = document.createElement('button');
// buttonEl.type = 'button';
// buttonEl.textContent = option.label;
// // можно добавлять и инлайн стили
// buttonEl.style.backgroundColor = option.color;
// console.log(buttonEl);
// создадим кнопку для всего массива объектов
// получаем ссылку на див в котором будут лежать кнопки
// const colorPickerContainerEl = document.querySelector('.js-color-picker');
// ==========олдскульный метод==========
// создаём пустой массив
// const elements = [];
// // перебираем все элементы массива colorPickerOptions
// for (let i = 0; i < colorPickerOptions.length; i += 1) {
//     const option = colorPickerOptions[i];
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     // добавим на кнопки класс, стили для которых уже прописаны в css
//     buttonEl.classList.add('color-picker-option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
// // пушим перебранные элементы в ранее созданный пустой массив
//     elements.push(buttonEl);
// }
// console.log(elements);
// так как все кнопки у нас в массиве, нужно их распылить во время добавления в див ...rest
// colorPickerContainerEl.append(...elements)
// ==========метод с map==========
// const colorPickerContainerEl = document.querySelector('.js-color-picker');
// const elements = colorPickerOptions.map(option =>
//     {
//     const buttonEl = document.createElement('button');
//     buttonEl.type = 'button';
//     buttonEl.classList.add('color-picker-option');
//     buttonEl.textContent = option.label;
//     buttonEl.style.backgroundColor = option.color;
//     return buttonEl;
//     }
// )
// // console.log(elements);
// colorPickerContainerEl.append(...elements)
// ========напишем для того же самого функцию для создания коллекции==========
// const colorPickerContainerEl = document.querySelector('.js-color-picker');
// const makeColorPickerOptions = (options) => {
//     return options.map(option => {
//         const buttonEl = document.createElement('button');
//         buttonEl.type = 'button';
//         buttonEl.classList.add('color-picker-option');
//         buttonEl.textContent = option.label;
//         buttonEl.style.backgroundColor = option.color;
//         return buttonEl;
//     });
// };
// const elements = makeColorPickerOptions(colorPickerOptions);
// colorPickerContainerEl.append(...elements);