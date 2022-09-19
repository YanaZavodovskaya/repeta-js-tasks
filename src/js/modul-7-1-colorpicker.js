const colors = [
    { hex: '#f44336', rgb: '244,67,54' },
    { hex: '#2a9d8f', rgb: '42,157,143' },
    { hex: '#588157', rgb: '88,129,87' },
    { hex: '#c8b6ff', rgb: '200,182,255' },
    { hex: '#e5989b', rgb: '229,152,155' },
    { hex: '#a8dadc', rgb: '168,218,220' },
    { hex: '#e56b6f', rgb: '132,165,157' },
    { hex: '#84a59d', rgb: '187,148,87' },
    { hex: '#bb9457', rgb: '153,217,140' },
    { hex: '#99d98c', rgb: '201,173,167' },
    { hex: '#c9ada7', rgb: '79,119,45' },
    { hex: '#4f772d', rgb: '7,59,76' },
    { hex: '#e07a5f', rgb: '224,122,95' },
];

const paletteContainer = document.querySelector('.js-palette');
const cardsMarkup = createColorCardsMarkup(colors);

paletteContainer.insertAdjacentHTML('beforeend', cardsMarkup);

paletteContainer.addEventListener('click', onPaletteContainerClick);

function createColorCardsMarkup(colors) {
    return colors.map(({hex, rgb}) => {
        return `
               
        <div class="color-card">
        <div
          class="color-swatch"
          data-hex="${hex}"
          data-rgb="${rgb}"
          style="background-color: ${hex}"
        ></div>
        <div class="color-meta">
      <p>HEX: ${hex}</p>
      <p>RGB: ${rgb}</p>
    </div>
      </div>
    `;
    }).join('');

}

// function onPaletteContainerClick(evt) {
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
    const isColorSwatch = evt.target.classList.contains('color-swatch');

    if (!isColorSwatch) {
        return;
    }    

    const swatchEl = evt.target;
    const parentColorCard = swatchEl.closest('.color-card');

    removeActiveCardClass();
    addActiveCardClass(parentColorCard);
    setBodyBgColor(swatchEl.dataset.hex);
}

function setBodyBgColor(color) {
    document.body.style.backgroundColor = color;
}

function removeActiveCardClass() {
    const currentActiveCard = document.querySelector('.color-card.is-active');

    if (currentActiveCard) {
        currentActiveCard.classList.remove('is-active');
    }
}

function addActiveCardClass(card) {
    card.classList.add('is-active');
}










