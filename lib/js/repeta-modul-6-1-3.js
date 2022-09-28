"use strict";

var titleEl = document.querySelector('.title');
console.log(titleEl.textContent);
console.log(titleEl.innerHTML); // можно перезаписать то что уже написано в тэге
// titleEl.innerHTML = '<a href="">eto ssylka</a>';
// спомощью иннерХтмл можно очистить тег
// titleEl.innerHTML = '';
// можно добавить этот элемент не удаляя то что уже записано в тег

titleEl.insertAdjacentHTML('beforeend', '<a href="">eto ssylka</a>');