"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function getRandomHexColor() {
  return "#".concat(Math.floor(Math.random() * 16777215).toString(16));
}

var inputEl = document.querySelector("input");
var createBoxEl = document.querySelector("button[data-create]");
var destroyBoxEl = document.querySelector("button[data-destroy]");
var boxWrapper = document.getElementById("boxes");
destroyBoxEl.addEventListener('click', destroyBox);

function destroyBox() {
  boxWrapper.innerHTML = '';
  inputEl.value = '';
}

createBoxEl.addEventListener('click', createBoxElClick);

function createBoxElClick() {
  var amount = Number(inputEl.value);
  createBoxes(amount);
}

function createBoxes(amount) {
  boxWrapper.insertAdjacentHTML('afterbegin', Array(amount).fill('<div></div>').join(""));
  createDivs();
}

function createDivs() {
  var divs = _toConsumableArray(boxWrapper.children);

  var boxBeginSize = 30;
  var step = 10;
  divs.forEach(function (div) {
    div.style.backgroundColor = getRandomHexColor();
    div.style.width = boxBeginSize + "px";
    div.style.height = boxBeginSize + "px";
    boxBeginSize += step;
  });
} // function createBoxElClick() {
//   const amount = Number(inputEl.value);
//   createBoxes(amount);
// }
// function createBoxes(amount) {
//   const div = '<div></div>';
//   const boxes = Array(amount).fill(div).join("");
//   boxWrapper.insertAdjacentHTML('afterbegin', boxes);
//   const divs = [...boxWrapper.children];
//   let boxBeginSize = 30;
//   const step = 10;
//   divs.forEach((div) => {
//     div.style.backgroundColor = getRandomHexColor();
//     div.style.width = boxBeginSize + "px";
//     div.style.height = boxBeginSize + "px";
//     boxBeginSize += step;
//   });
// }