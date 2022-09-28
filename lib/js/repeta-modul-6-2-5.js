"use strict";

// Долмат по координатам https://nerdparadise.com/programming/javascriptmouseposition
var boxRef = document.querySelector('.js-box');
boxRef.addEventListener('mouseover', onMouseEnter);
boxRef.addEventListener('mouseout', onMouseEnter); // boxRef.addEventListener('mouseenter', onMouseEnter);
// boxRef.addEventListener('mouseleave', onMouseLeave);
// boxRef.addEventListener('mousemove', onMouseMove);

function onMouseEnter(event) {
  var box = event.currentTarget;
  box.classList.add('box--active');
}

function onMouseLeave(event) {
  var box = event.currentTarget;
  box.classList.remove('box--active');
}

function onMouseMove(event) {
  console.log(event);
}