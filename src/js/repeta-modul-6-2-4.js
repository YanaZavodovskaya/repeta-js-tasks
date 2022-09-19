const refs = {
    output: document.querySelector('.js-output'),
    clearBtn: document.querySelector('.js-clear'),

};

// первое куда надо научиться вешать событие прослушивания клавиатуры
// это объект window
// типы событий: keypress, keydown, keyup
// keypress реагирует на клавиши которые генерят какой-то символ (буква, цифры и тд)
// keydown, keyup реагируют на нажитие произвольной клавиши на клавиатуре



window.addEventListener('keypress', onKeypress);
refs.clearBtn.addEventListener('click', onClearOutput);

function onKeypress(event) {
    // console.log(event);
    console.log('event.key: ', event.key);
    console.log('event.code: ', event.code);

    refs.output.textContent += event.key;
}

function onClearOutput() {
    refs.output.textContent = '';
}