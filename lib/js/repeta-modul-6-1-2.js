"use strict";

var _product = _interopRequireDefault(require("./product.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

console.log(_product["default"]); // const product = {
//     name: 'Сервоприводы',
//     description: 'lorem bla bla bla',
//     price: 2000,
//     available: true,
//     onSale: true,
// };

{
  /* <article class="product">
     <h2 class="product__name">Название</h2>
     <p class="product__desc">Описание</p>
     <p class="product__price">Цена</p>
  </article> */
} // const productEl = document.createElement('article');
// productEl.classList.add('product');
// const nameEl = document.createElement('h2');
// nameEl.textContent = product.name;
// nameEl.classList.add('product__name');
// const descEl = document.createElement('p');
// descEl.textContent = product.description;
// descEl.classList.add('product__desc');
// const priceEl = document.createElement('p');
// priceEl.textContent = `Цена: ${product.price} деняк`;
// priceEl.classList.add('product__price');
// console.log(nameEl);
// console.log(descEl);
// console.log(priceEl);
// productEl.append(nameEl, descEl, priceEl);
// console.log(productEl);
// напишем функцию, которая будет создавать одну карточку товара
// используем деструкткризацию. вместо product пишем {name, description, price}

var productsContainerEl = document.querySelector('.js-product');

var makeProductCard = function makeProductCard(_ref) {
  var name = _ref.name,
      description = _ref.description,
      price = _ref.price;
  var productEl = document.createElement('article');
  productEl.classList.add('product');
  var nameEl = document.createElement('h2');
  nameEl.textContent = name;
  nameEl.classList.add('product__name');
  var descEl = document.createElement('p');
  descEl.textContent = description;
  descEl.classList.add('product__desc');
  var priceEl = document.createElement('p');
  priceEl.textContent = "\u0426\u0435\u043D\u0430: ".concat(price, " \u0434\u0435\u043D\u044F\u043A");
  priceEl.classList.add('product__price');
  productEl.append(nameEl, descEl, priceEl);
  return productEl;
};

console.log(makeProductCard(_product["default"][2])); // напишем функцию, которая будет создавать много карточек товара

var elements = _product["default"].map(makeProductCard);

console.log(elements);
productsContainerEl.append.apply(productsContainerEl, _toConsumableArray(elements));