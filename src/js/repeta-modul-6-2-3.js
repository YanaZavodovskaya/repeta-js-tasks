// const input = document.querySelector('.js-input');
// const nameLabel = document.querySelector('.js-button > span');
// const licenseCheckbox = document.querySelector('.js-license');
// const btn = document.querySelector('.js-button');

const refs = {
    input: document.querySelector('.js-input'),
    nameLabel: document.querySelector('.js-button > span'),
    licenseCheckbox: document.querySelector('.js-license'),
    btn: document.querySelector('.js-button'),
};

// refs.input.addEventListener('focus', onInputFocus);
// refs.input.addEventListener('blur', onInputBlur);
// refs.input.addEventListener('change', onInputChange);
// refs.input.addEventListener('input', onInputChange);


// для обычных текстовых полей используется инпут
refs.input.addEventListener('input', onInputChange);
// событие работает для чекбоксов и радиобатонов каждый раз когда изменяется их состояние
refs.licenseCheckbox.addEventListener('change', onLicenseChange);

function onInputFocus() {
    console.log('Инпут получил фокус - событие focus');
}

function onInputBlur() {
    console.log('Инпут потерял фокус - событие blur');
}

function onInputChange(event) {
    console.log(event.currentTarget.value);
    refs.nameLabel.textContent = event.currentTarget.value;

 }

function onLicenseChange(event) { 
    console.log(event.currentTarget.checked);
    // console.log('refs.btn.disabled', refs.btn.disabled);

    refs.btn.disabled = !event.currentTarget.checked;

}
