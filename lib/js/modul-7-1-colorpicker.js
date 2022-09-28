"use strict";

var colors = [{
  hex: '#f44336',
  rgb: '244,67,54'
}, {
  hex: '#2a9d8f',
  rgb: '42,157,143'
}, {
  hex: '#588157',
  rgb: '88,129,87'
}, {
  hex: '#c8b6ff',
  rgb: '200,182,255'
}, {
  hex: '#e5989b',
  rgb: '229,152,155'
}, {
  hex: '#a8dadc',
  rgb: '168,218,220'
}, {
  hex: '#e56b6f',
  rgb: '132,165,157'
}, {
  hex: '#84a59d',
  rgb: '187,148,87'
}, {
  hex: '#bb9457',
  rgb: '153,217,140'
}, {
  hex: '#99d98c',
  rgb: '201,173,167'
}, {
  hex: '#c9ada7',
  rgb: '79,119,45'
}, {
  hex: '#4f772d',
  rgb: '7,59,76'
}, {
  hex: '#e07a5f',
  rgb: '224,122,95'
}];
var paletteContainer = document.querySelector('.js-palette');
var cardsMarkup = createColorCardsMarkup(colors);
paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);
paletteContainer.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(colors) {
  return colors.map(function (_ref) {
    var hex = _ref.hex,
        rgb = _ref.rgb;
    return "\n               \n        <div class=\"color-card\">\n        <div\n          class=\"color-swatch\"\n          data-hex=\"".concat(hex, "\"\n          data-rgb=\"").concat(rgb, "\"\n          style=\"background-color: ").concat(hex, "\"\n        ></div>\n        <div class=\"color-meta\">\n      <p>HEX: ").concat(hex, "</p>\n      <p>RGB: ").concat(rgb, "</p>\n    </div>\n      </div>\n    ");
  }).join('');
} // function onPaletteContainerClick(evt) {
//     const isColorSwatch = evt.target.classList.contains('color-swatch');
//     if (!isColorSwatch) {
//         return;
//     }
//     const currentActiveCard = document.querySelector('.color-card.is-active');
//     if (currentActiveCard) {
//         currentActiveCard.classList.remove('is-active');
//     }
//     const swatchEl = evt.target;
//     const parentColorCard = swatchEl.closest('.color-card');
//     console.log(parentColorCard);
//     parentColorCard.classList.add('is-active');
//     document.body.style.backgroundColor = swatchEl.dataset.hex;
// }


function onPaletteContainerClick(evt) {
  var isColorSwatch = evt.target.classList.contains('color-swatch');

  if (!isColorSwatch) {
    return;
  }

  var swatchEl = evt.target;
  var parentColorCard = swatchEl.closest('.color-card');
  removeActiveCardClass();
  addActiveCardClass(parentColorCard);
  setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
  document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
  var currentActiveCard = document.querySelector('.color-card.is-active');

  if (currentActiveCard) {
    currentActiveCard.classList.remove('is-active');
  }
}

function addActiveCardClass(card) {
  card.classList.add('is-active');
}