"use strict";

// делегирование это когда мы можем повесить одного слушателся события
// на коллекцию однотипных элементов
var container = document.querySelector('.js-container');
container.addEventListener('click', onClick);

function onClick(evt) {
  // console.log(evt.target);
  if (evt.target.nodeName !== 'BUTTON') {
    return;
  } // console.log(evt.target.nodeName);


  console.log(evt.target.textContent);
}

var addBtn = document.querySelector('.js-add-btn');
var labelCounter = 6;
addBtn.addEventListener('click', onAddBtnClick);

function onAddBtnClick() {
  var btn = document.createElement('button');
  btn.textContent = "Btn-".concat(labelCounter);
  btn.type = 'button';
  container.appendChild(btn);
  labelCounter += 1;
}